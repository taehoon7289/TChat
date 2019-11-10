##server side
event 정의
-connection
	-newUser: 전체유저에게 'update' 발생
	-message: 발신유저, 나머지 유저 따로 'update' 발생
	-disconnect: 나가는유저 제외 'update' 발생

server side 쪽에서 발생시키는 (emit) 이벤트
update

##client side
event 정의
-connect: name값 받기
-update: 발생시 ui 생성

client side 쪽에서 발생시키는 (emit) 이벤트
newUser, message