import { CognitionMattersApp } from '@jwmb/problemsource/lib/app';
import { TrainingPlanTest_account } from '@jwmb/problemsource/lib/debugTrainingPlans/trainingPlanTest';
import { MiniMetaphor } from '@jwmb/problemsource/lib/metaphors/mini/miniMetaphor';
import { ProgVisualizerMini } from '@jwmb/problemsource/lib/metaphors/mini/progVisualizerMini';
import { LinearTrainingPlan } from '@jwmb/problemsource/lib/trainingPlan/LinearTrainingPlan';

import * as li from '@jwmb/problemsource/lib/toRemove/logItem';
import { Instantiator } from '@jwmb/pixelmagic/lib/toReplace/instantiator';
import './extensions';
import { MyMiniMetaphor } from "./myMiniMetaphor";
import { PhaseXWorkingMemory, ProblemFactoryWM, ProblemFactoryWMMoving } from "@jwmb/cmcontent/lib/games/wm/phaseWM";
import { ProblemWorkMemoMoving } from '@jwmb/cmcontent/lib/games/wm/problemWMMoving';
import { ProblemWorkMemoCircle } from '@jwmb/cmcontent/lib/games/wm/problemWMCircle';
import { ProblemWorkMemo3dGrid } from '@jwmb/cmcontent/lib/games/wm/problemWMGrid3d';
import { ProblemWorkMemoNumbers } from '@jwmb/cmcontent/lib/games/wm/problemWMNumbers';

import { ExViewBase } from "@jwmb/problemsource/lib/games/exView";
import { ExViewWM } from "@jwmb/cmcontent/lib/games/wm/viewWM";
import { PhaseXBase, StimuliModifierReverse } from "@jwmb/problemsource/lib/phasing/phase";
import { RNGSeederTrialInLevel, RNGseed } from "@jwmb/pixelmagic/lib/utility/random";
import { ResponseAnalyzerSequence } from "@jwmb/problemsource/lib/phasing/responseAnalysis";
import { LevelChangeTrial } from "@jwmb/problemsource/lib/phasing/level";
import { ProblemWorkMemoGrid } from "@jwmb/cmcontent/lib/games/wm/problemWMGrid";
// import { PhaseXWorkingMemory } from './cmcontent/games/wm/phaseWM';
// import { PhaseXBase, StimuliModifierReverse } from './problemsource/phasing/phase';

export class Main {
    // static app: MyApp;
    static app: CognitionMattersApp;
    static test() {
        (<any>Instantiator.i).addClassX('MiniMetaphor', null, MyMiniMetaphor);
        // Instantiator.i.addClass(MiniMetaphor);
        Instantiator.i.addClass(TrainingPlanTest_account);
        Instantiator.i.addClass(LinearTrainingPlan);
        Instantiator.i.addClass(ProgVisualizerMini);

        Instantiator.i.addClass(ExViewBase);
        Instantiator.i.addClass(PhaseXBase);
        Instantiator.i.addClass(RNGSeederTrialInLevel);
        Instantiator.i.addClass(RNGseed);
        Instantiator.i.addClass(ResponseAnalyzerSequence);
        Instantiator.i.addClass(StimuliModifierReverse);
        Instantiator.i.addClass(LevelChangeTrial);
      
        Instantiator.i.addClass(PhaseXWorkingMemory);
        Instantiator.i.addClass(ExViewWM);
        Instantiator.i.addClass(ProblemWorkMemoGrid);
        Instantiator.i.addClass(ProblemFactoryWM);
      
        Instantiator.i.addClass(ProblemWorkMemoMoving);
        Instantiator.i.addClass(ProblemFactoryWMMoving);
      
        Instantiator.i.addClass(ProblemWorkMemoCircle);
        Instantiator.i.addClass(ProblemWorkMemoNumbers);
        Instantiator.i.addClass(ProblemWorkMemo3dGrid);
      

        Object.keys(li).forEach(k => Instantiator.i.addClass((<any>li)[k]));
        // console.log('awaw', Instantiator.i.classNameToPath);
        // console.log('asddd', Instantiator.i.classNameToPath.values.findLastIndex(v => v === null));
        window.onload = () => { // document window
            Main.app = new CognitionMattersApp();
        };
    }
}
Main.test();

