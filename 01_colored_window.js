const r = require("raylib");
const window = {
    width : 500,
    height : 500,
    title : "colored window",
    FPS : 60,
};
const recData = {
    x : 50,
    y : 50,
    width : 400,
    height : 400,
}
const recColor = {
    r : 114,
    g : 47,
    b : 55,
    a : 255,
};
//sunlight color
const borderColor = {
    r : 244,
    g : 233,
    b : 155,
    a : 255,
};

r.InitWindow(window.width,window.height,window.title);
r.SetTargetFPS(window.FPS);
r.SetTraceLogLevel(r.LOG_NONE);
while(!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangleRec(recData,recColor);
    r.DrawRectangleLines(recData.x,recData.y,recData.width,recData.height,borderColor);
    r.EndDrawing();
}
r.CloseWindow();