import { MiniMetaphor } from "@jwmb/problemsource/lib/metaphors/mini/miniMetaphor";
import { ViewResolver } from "./viewResolver";

export class MyMiniMetaphor extends MiniMetaphor {
    constructor(data: any) {
        super(data);
    }
    protected getPhaseViewClassesResolverConstructor(): Function {
        return ViewResolver;
    }
}