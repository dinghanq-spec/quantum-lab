/* Pure JavaScript quantum state, matrix, tensor product, and gate operations. */
(function (globalScope) {
  'use strict';

  const EPSILON = 1e-12;
  const MAX_QUBITS = 4;

  class Complex {
    constructor(real = 0, imaginary = 0) {
      this.real = Number(real);
      this.imaginary = Number(imaginary);
      if (!Number.isFinite(this.real) || !Number.isFinite(this.imaginary)) {
        throw new TypeError('Complex parts must be finite numbers.');
      }
      Object.freeze(this);
    }

    add(other) {
      const value = Complex.from(other);
      return new Complex(this.real + value.real, this.imaginary + value.imaginary);
    }

    multiply(other) {
      const value = Complex.from(other);
      return new Complex(
        this.real * value.real - this.imaginary * value.imaginary,
        this.real * value.imaginary + this.imaginary * value.real
      );
    }

    conjugate() {
      return new Complex(this.real, -this.imaginary);
    }

    magnitudeSquared() {
      return this.real * this.real + this.imaginary * this.imaginary;
    }

    toString() {
      const sign = this.imaginary < 0 ? '-' : '+';
      return `${this.real}${sign}${Math.abs(this.imaginary)}i`;
    }

    static from(value) {
      if (value instanceof Complex) return value;
      if (typeof value === 'number') return new Complex(value, 0);
      if (value && Number.isFinite(value.real) && Number.isFinite(value.imaginary)) {
        return new Complex(value.real, value.imaginary);
      }
      throw new TypeError('Value must be a number or Complex number.');
    }
  }

  function validateQubitCount(qubitCount) {
    if (!Number.isInteger(qubitCount) || qubitCount < 1 || qubitCount > MAX_QUBITS) {
      throw new RangeError(`Qubit count must be an integer from 1 to ${MAX_QUBITS}.`);
    }
  }

  function validateQubitIndex(index, qubitCount) {
    validateQubitCount(qubitCount);
    if (!Number.isInteger(index) || index < 0 || index >= qubitCount) {
      throw new RangeError(`Qubit index must be from 0 to ${qubitCount - 1}.`);
    }
  }

  class StateVector {
    constructor(alpha = new Complex(1, 0), beta = new Complex(0, 0)) {
      this.alpha = Complex.from(alpha);
      this.beta = Complex.from(beta);
      this.normalize();
    }

    normSquared() {
      return this.alpha.magnitudeSquared() + this.beta.magnitudeSquared();
    }

    normalize() {
      const norm = Math.sqrt(this.normSquared());
      if (norm < EPSILON) throw new RangeError('A quantum state cannot be the zero vector.');
      this.alpha = new Complex(this.alpha.real / norm, this.alpha.imaginary / norm);
      this.beta = new Complex(this.beta.real / norm, this.beta.imaginary / norm);
      return this;
    }

    probabilities() {
      return { zero: this.alpha.magnitudeSquared(), one: this.beta.magnitudeSquared() };
    }

    toArray() {
      return [this.alpha, this.beta];
    }
  }

  class MultiQubitState {
    constructor(qubitCount = 4, amplitudes = null) {
      validateQubitCount(qubitCount);
      const dimension = 2 ** qubitCount;
      const values = amplitudes || Array.from({ length: dimension }, (_, index) => new Complex(index === 0 ? 1 : 0, 0));
      if (!Array.isArray(values) || values.length !== dimension) {
        throw new RangeError(`A ${qubitCount}-qubit state requires ${dimension} amplitudes.`);
      }
      this.qubitCount = qubitCount;
      this.amplitudes = values.map((value) => Complex.from(value));
      this.normalize();
      Object.freeze(this.amplitudes);
      Object.freeze(this);
    }

    normSquared() {
      return this.amplitudes.reduce((sum, amplitude) => sum + amplitude.magnitudeSquared(), 0);
    }

    normalize() {
      const norm = Math.sqrt(this.normSquared());
      if (norm < EPSILON) throw new RangeError('A quantum state cannot be the zero vector.');
      this.amplitudes = this.amplitudes.map((amplitude) => new Complex(amplitude.real / norm, amplitude.imaginary / norm));
      return this;
    }

    probabilities() {
      return this.amplitudes.map((amplitude) => amplitude.magnitudeSquared());
    }

    basisLabel(index) {
      return index.toString(2).padStart(this.qubitCount, '0');
    }

    amplitudeAt(index) {
      if (!Number.isInteger(index) || index < 0 || index >= this.amplitudes.length) throw new RangeError('State index is out of range.');
      return this.amplitudes[index];
    }
  }

  class ComplexMatrix {
    constructor(rows) {
      if (!Array.isArray(rows) || rows.length === 0 || rows.some((row) => !Array.isArray(row) || row.length !== rows.length)) {
        throw new TypeError('Matrix must be a non-empty square array.');
      }
      this.size = rows.length;
      this.rows = rows.map((row) => row.map((value) => Complex.from(value)));
      Object.freeze(this.rows);
      Object.freeze(this);
    }

    multiplyVector(vector) {
      if (!Array.isArray(vector) || vector.length !== this.size) throw new RangeError('Vector dimension does not match matrix.');
      return this.rows.map((row) => row.reduce((sum, value, index) => sum.add(value.multiply(vector[index])), new Complex(0, 0)));
    }

    multiplyState(state) {
      if (!(state instanceof MultiQubitState) || state.amplitudes.length !== this.size) throw new RangeError('State dimension does not match matrix.');
      return new MultiQubitState(state.qubitCount, this.multiplyVector(state.amplitudes));
    }
  }

  class ComplexMatrix2x2 extends ComplexMatrix {
    constructor(rows) {
      if (!Array.isArray(rows) || rows.length !== 2 || rows.some((row) => !Array.isArray(row) || row.length !== 2)) throw new TypeError('A 2x2 matrix requires two rows with two values each.');
      super(rows);
    }

    multiplyState(state) {
      if (!(state instanceof StateVector)) throw new TypeError('2x2 gates require a StateVector.');
      const result = this.multiplyVector(state.toArray());
      return new StateVector(result[0], result[1]);
    }
  }

  function tensorProduct(left, right) {
    const leftValues = left instanceof ComplexMatrix || left instanceof ComplexMatrix2x2 ? left.rows : left instanceof StateVector ? left.toArray() : left instanceof MultiQubitState ? left.amplitudes : left;
    const rightValues = right instanceof ComplexMatrix || right instanceof ComplexMatrix2x2 ? right.rows : right instanceof StateVector ? right.toArray() : right instanceof MultiQubitState ? right.amplitudes : right;
    if (!Array.isArray(leftValues) || !Array.isArray(rightValues)) throw new TypeError('Tensor operands must be matrices or vectors.');
    if (Array.isArray(leftValues[0]) || Array.isArray(rightValues[0])) {
      if (!Array.isArray(leftValues[0]) || !Array.isArray(rightValues[0])) throw new TypeError('Tensor operands must both be matrices or both be vectors.');
      return new ComplexMatrix(leftValues.flatMap((leftRow) => rightValues.map((rightRow) => leftRow.flatMap((leftValue) => rightRow.map((rightValue) => Complex.from(leftValue).multiply(rightValue))))));
    }
    return new MultiQubitState(Math.log2(leftValues.length * rightValues.length), leftValues.flatMap((leftValue) => rightValues.map((rightValue) => Complex.from(leftValue).multiply(rightValue))));
  }

  function basisIndexForQubit(index, qubitCount) {
    return 1 << (qubitCount - 1 - index);
  }

  function expandSingleQubitGate(gate, targetQubit, qubitCount) {
    if (!(gate instanceof ComplexMatrix2x2)) throw new TypeError('A single-qubit gate must be a 2x2 matrix.');
    validateQubitIndex(targetQubit, qubitCount);
    const dimension = 2 ** qubitCount;
    const rows = Array.from({ length: dimension }, () => Array.from({ length: dimension }, () => new Complex(0, 0)));
    const bit = basisIndexForQubit(targetQubit, qubitCount);
    for (let row = 0; row < dimension; row += 1) {
      for (let column = 0; column < dimension; column += 1) {
        if ((row & ~bit) === (column & ~bit)) rows[row][column] = gate.rows[(row & bit) ? 1 : 0][(column & bit) ? 1 : 0];
      }
    }
    return new ComplexMatrix(rows);
  }

  function createCNOT(controlQubit, targetQubit, qubitCount) {
    validateQubitIndex(controlQubit, qubitCount);
    validateQubitIndex(targetQubit, qubitCount);
    if (controlQubit === targetQubit) throw new RangeError('Control and target qubits must be different.');
    const dimension = 2 ** qubitCount;
    const controlBit = basisIndexForQubit(controlQubit, qubitCount);
    const targetBit = basisIndexForQubit(targetQubit, qubitCount);
    const rows = Array.from({ length: dimension }, () => Array.from({ length: dimension }, () => new Complex(0, 0)));
    for (let column = 0; column < dimension; column += 1) {
      const row = (column & controlBit) ? column ^ targetBit : column;
      rows[row][column] = new Complex(1, 0);
    }
    return new ComplexMatrix(rows);
  }

  class QuantumCircuit {
    constructor(qubitCount = 4, timeSteps = 1) {
      validateQubitCount(qubitCount);
      if (!Number.isInteger(timeSteps) || timeSteps < 1) throw new RangeError('Time steps must be a positive integer.');
      this.qubitCount = qubitCount;
      this.timeSteps = timeSteps;
      this.wires = Array.from({ length: qubitCount }, () => Array(timeSteps).fill(null));
    }

    validateTimeStep(timeStep) {
      if (!Number.isInteger(timeStep) || timeStep < 0 || timeStep >= this.timeSteps) throw new RangeError(`Time step must be from 0 to ${this.timeSteps - 1}.`);
    }

    setGate(qubit, timeStep, gateName) {
      validateQubitIndex(qubit, this.qubitCount);
      this.validateTimeStep(timeStep);
      if (!gates[gateName]) throw new RangeError(`Unknown single-qubit gate: ${gateName}.`);
      this.wires[qubit][timeStep] = { type: 'SINGLE', gate: gateName, qubit };
      return this;
    }

    addCNOT(control, target, timeStep) {
      validateQubitIndex(control, this.qubitCount);
      validateQubitIndex(target, this.qubitCount);
      this.validateTimeStep(timeStep);
      if (control === target) throw new RangeError('CNOT control and target must be different.');
      if (this.wires[control][timeStep] || this.wires[target][timeStep]) throw new RangeError('CNOT wires must be empty at this time step.');
      const operation = { type: 'CNOT', control, target, timeStep };
      this.wires[control][timeStep] = operation;
      this.wires[target][timeStep] = { ...operation, role: 'TARGET' };
      return this;
    }

    addMeasurement(timeStep) {
      this.validateTimeStep(timeStep);
      for (let qubit = 0; qubit < this.qubitCount; qubit += 1) {
        if (this.wires[qubit][timeStep]) throw new RangeError('Measurement time step must be empty.');
        this.wires[qubit][timeStep] = { type: 'MEASURE', timeStep };
      }
      return this;
    }

    getCell(qubit, timeStep) {
      validateQubitIndex(qubit, this.qubitCount);
      this.validateTimeStep(timeStep);
      return this.wires[qubit][timeStep];
    }
  }

  class CircuitEvaluator {
    constructor(circuit) {
      if (!(circuit instanceof QuantumCircuit)) throw new TypeError('CircuitEvaluator expects a QuantumCircuit.');
      this.circuit = circuit;
    }

    run(initialState = new MultiQubitState(this.circuit.qubitCount), options = {}) {
      if (!(initialState instanceof MultiQubitState) || initialState.qubitCount !== this.circuit.qubitCount) throw new RangeError('Initial state does not match circuit qubit count.');
      let state = initialState;
      const measurements = [];
      for (let timeStep = 0; timeStep < this.circuit.timeSteps; timeStep += 1) {
        const visitedCNOTs = new Set();
        for (let qubit = 0; qubit < this.circuit.qubitCount; qubit += 1) {
          const cell = this.circuit.getCell(qubit, timeStep);
          if (!cell) continue;
          if (cell.type === 'SINGLE') {
            state = expandSingleQubitGate(gates[cell.gate], qubit, this.circuit.qubitCount).multiplyState(state);
          } else if (cell.type === 'CNOT' && !visitedCNOTs.has(`${cell.control}:${cell.target}`)) {
            state = createCNOT(cell.control, cell.target, this.circuit.qubitCount).multiplyState(state);
            visitedCNOTs.add(`${cell.control}:${cell.target}`);
          } else if (cell.type === 'MEASURE' && qubit === 0) {
            const result = measureState(state, options.random);
            state = result.state;
            measurements.push({ timeStep, result: result.result, probabilities: result.probabilities });
          }
        }
      }
      return { state, measurements };
    }
  }

  function measureState(state, random = Math.random()) {
    if (!(state instanceof MultiQubitState)) throw new TypeError('measureState expects a MultiQubitState.');
    const probabilities = state.probabilities();
    let cumulative = 0;
    let result = probabilities.length - 1;
    for (let index = 0; index < probabilities.length; index += 1) {
      cumulative += probabilities[index];
      if (random <= cumulative) { result = index; break; }
    }
    const collapsed = probabilities[result] < EPSILON ? state.amplitudes : state.amplitudes.map((_, index) => new Complex(index === result ? 1 : 0, 0));
    return { state: new MultiQubitState(state.qubitCount, collapsed), result: state.basisLabel(result), probabilities };
  }

  const SQRT_HALF = 1 / Math.sqrt(2);
  const gates = Object.freeze({
    H: new ComplexMatrix2x2([[SQRT_HALF, SQRT_HALF], [SQRT_HALF, -SQRT_HALF]]),
    X: new ComplexMatrix2x2([[0, 1], [1, 0]]),
    Y: new ComplexMatrix2x2([[0, new Complex(0, -1)], [new Complex(0, 1), 0]]),
    Z: new ComplexMatrix2x2([[1, 0], [0, -1]])
  });

  const quantumCore = Object.freeze({ Complex, StateVector, MultiQubitState, ComplexMatrix, ComplexMatrix2x2, tensorProduct, expandSingleQubitGate, createCNOT, QuantumCircuit, CircuitEvaluator, measureState, gates, MAX_QUBITS });
  globalScope.QuantumCore = quantumCore;

  const singleZero = new StateVector(1, 0);
  const hadamardResult = gates.H.multiplyState(singleZero);
  console.log('[QuantumCore] H|0> =', hadamardResult.toArray().map((value) => value.toString()));
  const fourQubitZero = new MultiQubitState(4);
  const hOnQ0 = expandSingleQubitGate(gates.H, 0, 4).multiplyState(fourQubitZero);
  console.log('[QuantumCore] H on q[0] non-zero states =', hOnQ0.amplitudes.map((value, index) => value.magnitudeSquared() > EPSILON ? `${hOnQ0.basisLabel(index)}: ${value.toString()}` : null).filter(Boolean));
  const bellInput = expandSingleQubitGate(gates.H, 0, 2).multiplyState(new MultiQubitState(2));
  const bellState = createCNOT(0, 1, 2).multiplyState(bellInput);
  console.log('[QuantumCore] H(q[0]) then CNOT(q[0], q[1]) =', bellState.amplitudes.map((value, index) => value.magnitudeSquared() > EPSILON ? `${bellState.basisLabel(index)}: ${value.toString()}` : null).filter(Boolean));
  const sampleCircuit = new QuantumCircuit(4, 3).setGate(0, 0, 'H').addCNOT(0, 1, 1).addMeasurement(2);
  const sampleRun = new CircuitEvaluator(sampleCircuit).run();
  console.log('[QuantumCore] Circuit sample 4 qubits =', sampleRun.state.amplitudes.map((value, index) => value.magnitudeSquared() > EPSILON ? `${sampleRun.state.basisLabel(index)}: ${value.toString()}` : null).filter(Boolean));

  if (typeof module !== 'undefined' && module.exports) module.exports = quantumCore;
})(typeof window !== 'undefined' ? window : globalThis);
