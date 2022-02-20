export interface Menu {
  displayName: string;
  menus: MenuItem[];
}

export interface MenuItem {
  chineseName: string;
  functionName: string;
  englishName?: string;
  materials?: string[];
  kitchenWares?: string[];
  steps: Step[]
}

export interface BaseStep {
  content: string;
  materials?: string[];
  kitchenWares?: string[];
}

export interface AssignStep extends BaseStep {
  type: 'assign';
  id: string;
  target: string; // the target of assigned value
}

export interface ActionStep extends BaseStep {
  type: 'action',
  timer?: number // timer for awaitAction, second
}

export interface TimerActionStep extends BaseStep {
  type: 'timer';
  timer?: number; // timer for awaitAction, second
}

export interface IfActionStep {
  type: 'ifAction';
  content: Step[];
  condition?: string;
}

export type Step = AssignStep | ActionStep | TimerActionStep | IfActionStep