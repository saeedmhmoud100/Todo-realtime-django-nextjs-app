

export function ServerActions(content: string, socket: WebSocket    ) {
    socket.send(JSON.stringify({"message":content, "event":"add"}));
    return;
}

export function ChangeTaskStatus(pk: number, socket: WebSocket) {
    socket.send(JSON.stringify({"id":pk, "event":"change-status"}));
    return;
}