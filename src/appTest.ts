import { App } from "@jwmb/pixelmagic/lib/app/app";
import { RenderSettings, RendererManager, ScaleMode } from "@jwmb/pixelmagic/lib/app/rendererManager";
import { Graphics } from "pixi.js";
import { UpdateManager } from "@jwmb/pixelmagic/lib/app/updateManager";
import { RoundRectangle, GraphicsEx } from '@jwmb/drawing_pixi';
import { ERectangle, EPoint } from "@jwmb/geometry";

export class AppTest extends App {
    constructor() {
        super();

        const renderSettings = new RenderSettings();
        renderSettings.height = 768;
        renderSettings.maxHeight = 768;
        renderSettings.width = 1024;
        renderSettings.maxWidth = 1024;

        renderSettings.renderOptions = <any>{ backgroundColor: 0x000000 };
        renderSettings.renderer = PIXI.RENDERER_TYPE.CANVAS;
        renderSettings.scaleMode = ScaleMode.SCALE_PROPORTIONALLY;
        renderSettings.htmlContainerId = 'pixelMagicContainer';
        RendererManager.applyPresetRenderSettings(renderSettings);

        this.init(renderSettings, null);

        this.inited.addOnce(this.addContent, this);
    }

    private addContent() {
        const test = new TestGfx();
        this.rendererManager.stage.addChild(test);
        test.update();
    }
}
class TestGfx extends Graphics {
    private rr: RoundRectangle;
    private gx: GraphicsEx;
    constructor() {
        super();

        // gfx.drawEllipse(0, 0, 500, 250);

        this.rr = new RoundRectangle(new ERectangle(20, 20, 100, 200));
        this.rr.ellipseSize = new EPoint(30, 30);
        this.gx = new GraphicsEx(this);
        UpdateManager.instance.updated.add(this.update, this);
    }
    public update() {
        this.rr.tension = 3 + 4 * Math.sin((Date.now() % 1000) / 1000 * Math.PI * 2);

        this.clear();
        this.lineStyle(2, 0x0000ff, 1);
        this.beginFill(0xff0000, 1);
        this.gx.drawShapes(this.rr);
        this.endFill();
    }
    dispose() {
        UpdateManager.instance.updated.remove(this.update, this);
    }
}