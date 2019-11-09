const socket = io()

/* 접속 되었을때 실행 */
socket.on('connect', () => {
    let name = prompt('반갑습니다.', '')
    // 이름이 빈칸인 경우
    if (!name) {
        name = '익명'
    }
    /* 서버에 새로운 유저가 왔다고 알림 */
    socket.emit('newUser', name)
})

socket.on('update', (data) => {
    console.log(`${data.name}: ${data.message}`)
    const chat = document.createElement('p')
    chat.textContent = `${data.name}: ${data.message}`
    document.getElementById('history').append(chat)
})

/* 전송함수 */
function send() {
    // 입력값 가져오기
    let message = document.getElementById('test').value
    // 가져온후 데이터 비우기
    document.getElementById('test').value = ''
    // 서버로 send 이벤트 전달 + 데이터
    socket.emit('message', {
        type: 'message',
        message: message
    })
}
