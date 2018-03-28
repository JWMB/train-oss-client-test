// import { NewPhaseLogItem, PhaseEndLogItem, LeaveTestLogItem } from '../toRemove/logItem';
import { PhaseXBase } from '@jwmb/problemsource/lib/phasing/phase';
import { ViewResolverBase } from '@jwmb/problemsource/lib/phasing/viewResolverBase';
import { PhaseXWorkingMemory } from '@jwmb/cmcontent/lib/games/wm/phaseWM';
import { PhaseXArrows, ExViewLevelIndicator } from '@jwmb/cmcontent/lib/games/arrows/phaseArrows';
import { ProblemArrows } from '@jwmb/cmcontent/lib/games/arrows/problemArrows';
import { ExViewWM } from '@jwmb/cmcontent/lib/games/wm/viewWM';
import { PhaseXMathMissingSymbol } from '@jwmb/cmcontent/lib/games/missingSymbol/ProblemFactoryMissingSymbol';
import { PhaseXTangram } from '@jwmb/cmcontent/lib/games/tangram/phaseTangram';
import { ProblemTangram } from '@jwmb/cmcontent/lib/games/tangram/problemTangram';
import { PhaseXNPals } from '@jwmb/cmcontent/lib/games/npals/phaseNPals';
import { ExViewNPals } from '@jwmb/cmcontent/lib/games/npals/viewNPals';
import { ProblemNPals } from '@jwmb/cmcontent/lib/games/npals/problemNPals';
import { PhaseXRotation } from '@jwmb/cmcontent/lib/games/rotation/phaseRotation';
import { PhaseXBoolean } from '@jwmb/cmcontent/lib/games/boolean/phaseBoolean';
import { ExViewBoolean } from '@jwmb/cmcontent/lib/games/boolean/viewBoolean';
import { ProblemBoolean } from '@jwmb/cmcontent/lib/games/boolean/problemBoolean';
import { PhaseXNBack } from '@jwmb/cmcontent/lib/games/nback/phaseNBack';
import { ExViewNBack } from '@jwmb/cmcontent/lib/games/nback/ExViewNBack';
import { ProblemNBack } from '@jwmb/cmcontent/lib/games/nback/problemNBack';
import { PhaseXMemoCrush, ExViewMemoCrush } from '@jwmb/cmcontent/lib/games/wm/crush/phaseMemoCrush';
import { ProblemMemoCrush } from '@jwmb/cmcontent/lib/games/wm/crush/problemMemoCrush';
import { ProblemRotation } from '@jwmb/cmcontent/lib/games/rotation/problemRotation';

export class ViewResolver extends ViewResolverBase {
    getClasses(phaseConstructor: Function) {
        const views = { phase: <Function>null, problem: <Function>null };
        switch (phaseConstructor) {
            case PhaseXNPals:
                views.phase = ExViewNPals;
                views.problem = ProblemNPals;
                break;
            // case PhaseXWISC:
            //     views.phase = ExViewBase;
            //     views.problem = ProblemTextMath;
            //     break;
            case PhaseXBase:
            case PhaseXMathMissingSymbol:
            // case Exercises.NVR.PhaseNVR:
                views.phase = ExViewLevelIndicator;
                break;
            case PhaseXRotation:
                views.phase = ExViewLevelIndicator;
                views.problem = ProblemRotation;
                break;
            case PhaseXTangram:
                views.phase = ExViewLevelIndicator;
                views.problem = ProblemTangram;
                break;
            case PhaseXNBack:
                views.phase = ExViewNBack;
                views.problem = ProblemNBack;
                break;
            case PhaseXArrows:
                views.phase = ExViewLevelIndicator;
                views.problem = ProblemArrows;
                break;
            case PhaseXBoolean:
                views.phase = ExViewBoolean;
                views.problem = ProblemBoolean;
                break;
            // case Exercises.Recognition.PhaseRecognition:
            //     views.phase = ExViewBase;
            //     views.problem = Exercises.Recognition.ProblemRecognition;
            //     break;
            case PhaseXWorkingMemory:
            case PhaseXMemoCrush:
                if (phaseConstructor === PhaseXMemoCrush) {
                    views.phase = ExViewMemoCrush;
                    views.problem = ProblemMemoCrush;
                } else {
                    views.phase = ExViewWM;
                }
                break;
            default:
                break;
        }
        return views;
    }
}
