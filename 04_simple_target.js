const r = require("raylib");

const window = {
    width : 500,
    height : 500,
    title : "simple target",
    FPS : 60,
};

const target = {
    x : 250,
    y : 250,
}

//sun set
const color1 = {
    r : 250,
    g : 214,
    b : 165,
    a : 255,
};
//sky blue
const color2 = {
    r : 255,
    g : 94,
    b : 19,
    a : 100,
};
//wine red
const color3 = {
    r : 114,
    g : 47,
    b : 55,
    a : 100,
};

const bgColor = {
    r : 30,
    g : 30,
    b : 30,
    a : 10,
};

r.InitWindow(window.width,window.height,window.title);
r.SetTargetFPS(window.FPS);
r.SetTraceLogLevel(r.LOG_NONE);
while(!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(bgColor);

    r.DrawCircleV(target, 175, color1);
    r.DrawCircleV(target, 150, color2);
    r.DrawCircleV(target, 125, color3);
    r.DrawCircleV(target, 100, color1);
    r.DrawCircleV(target, 75, color2);
    r.DrawCircleV(target, 50, color3);

    r.EndDrawing();
}
r.CloseWindow();