// 은행에 비유

// Interface
abstract class ICommand {
  abstract execute(args): void;
}

//
class State {
  private _state: number;
  constructor(state) {
    this._state = state;
  }
  getState() {
    return this._state;
  }
  setState(value) {
    this._state = value;
  }
}

class BankManager {
  private _state;
  private _commands = {};
  constructor(state) {
    this._state = state;
  }
  registerCommands(...args) {
    for (const cmd of args) {
      this._commands[cmd.constructor.name] = cmd;
    }
  }
  executeCmd(cmdName, param) {
    this._commands[cmdName].execute(this._state, param);
  }
}

class Deposit implements ICommand {
  execute(...params): void {
    const [state, amount] = params;
    const prevState = state.getState();
    state.setState(prevState + amount);
  }
}
class Withdrawal implements ICommand {
  execute(...params): void {
    const [state, amount] = params;
    const prevState = state.getState();
    state.setState(prevState - amount);
  }
}
