linket-frontend
==============
LINKET은 공연 관리 솔루션 서비스입니다.

## 🖥️ 서비스 소개
* LINKET(이하 링켓)은 LINK와 TICKET의 합성어로 콘서트와 같은 행사의 등록-관리 솔루션을 제공하는 서비스입니다.

## 🕰️ 개발 기간
* 23.05.01 ~23.05.31

## 👥 개발 인원
* 팀장 : 문석진
* 팀원 : 김세건
* 팀원 : 박도연
* 팀원 : 변형준
* 팀원 : 유비

## ⚙️ 개발 환경
* Core:
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-bagde&logo=React&logoColor=blue"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-bagde&logo=TypeScript&logoColor=white"/>
* 상태 관리: redux-toolkit,
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-bagde&logo=Redux&logoColor=white"/>
* 스타일링:
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-bagde&logo=TailwindCSS&logoColor=white"/>

* etc: <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-bagde&logo=Firebase&logoColor=orange"/>


## 📄 기능 설명
* 링켓은 관객, 주최 측 직원, 파트타이머 세 종류의 사용자를 고려하여 구성하였고, 각 사용자는 아래의 기능을 사용할 수 있습니다.
1. 관객: 티켓을 이용하여 행사에 참여하는 고객으로, 티켓 등록, 행사 정보 확인 및 행사장 위치 확인 서비스를 사용할 수 있습니다.
    <table>
        <thead>
            <th> 기능
                <td style="text-align:center">티켓 등록</td>
                <td style="text-align:center">티켓 정보 조회</td>
                <td style="text-align:center">행사장 위치 조회</td>
            </th>
        </thead>
        <tbody>
            <tr>
                <td>화면</td>
                <td>
                    <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.07.43.png?alt=media&token=a57742ae-45f4-45e7-86bf-335b8d353483" />
                </td>
                <td>
                    <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.13.21.png?alt=media&token=7a177fc8-92d4-4cc9-b917-8c45f5064d35" />
                </td>
                <td>
                    <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.14.04.png?alt=media&token=5a62e4b3-95de-48ce-a148-a436340a8fef" />
                </td>
            </tr>
        </tbody>
    </table>

2. 주최 측 직원: 행사를 주최하는 단체에 소속된 직원으로, 행사 등록-수정-삭제, 행사별 공고 등록-수정-삭제, 공고별 근태 관리 및 채팅 서비스를 사용할 수 있습니다.
    <details>
    <summary>행사 관리</summary>
        <table>
            <thead>
                <th> 기능
                    <td style="text-align:center">행사 등록</td>
                    <td style="text-align:center">행사 수정</td>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>화면</td>
                    <td>
                        <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.31.36.png?alt=media&token=7759d154-4a15-4ec1-a060-a6190b0efbef" />
                    </td>
                    <td>
                        <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.36.19.png?alt=media&token=5fb066f8-9c86-479f-806b-eff49589b03b" />
                    </td>
                </tr>
            </tbody>
        </table>
    </details>
    <details>
    <summary>행사별 공고 관리</summary>
        <table>
            <thead>
                <th> 기능
                    <td style="text-align:center">공고 등록</td>
                    <td style="text-align:center">공고 전체 조회</td>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>화면</td>
                    <td>
                        <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.45.46.png?alt=media&token=10abd8aa-0cb1-4889-9fe7-a3b8e720e1fc" />
                    </td>
                    <td>
                        <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.45.32.png?alt=media&token=dd78f1f7-76e7-4553-9376-c67ca3799cfd" />
                    </td>
                </tr>
            </tbody>
        </table>
        <table>
            <thead>
                <th> 기능
                    <td style="text-align:center">공고 상세 조회</td>
                    <td style="text-align:center">공고별 채팅</td>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>화면</td>
                    <td>
                        <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.46.01.png?alt=media&token=d3715585-3f6b-4af9-b9c6-afe8ed400e7f" />
                    </td>
                    <td>
                        <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.14.53.png?alt=media&token=356b953b-f658-4be0-81b7-0d7fcbe4bc6c" />
                    </td>
                </tr>
            </tbody>
        </table>
    </details>
    <details>
    <summary>행사별 근태 관리</summary>
        <table>
            <thead>
                <th> 기능
                    <td style="text-align:center">근태 전체 조회</td>
                    <td style="text-align:center">근태 상세 조회</td>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>화면</td>
                    <td>
                        <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.09.37.png?alt=media&token=cc0d2f3c-584f-4ffb-a755-9d46e7168537" />
                    </td>
                    <td>
                        <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.10.13.png?alt=media&token=8b7ffd4e-7ddc-4ac7-8138-6763bfa9fae8" />
                    </td>
                </tr>
            </tbody>
        </table>
    </details>
    <details>
    <summary>행사 통계 조회</summary>
    <table>
        <thead>
            <th> 기능
                <td> 리뷰 통계</td>
                <td> 입장객 통계</td>
            </th>
        </thead>
        <tbody>
            <tr>
                <td>화면</td>
                <td>
                    <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.16.51.png?alt=media&token=b2ec441b-deba-4a42-981e-a0207788d016" />
                </td>
                <td>
                    <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.16.35.png?alt=media&token=a0f0b4aa-dcd0-4970-b390-7735958fdb0f" />
                </td>
            </tr>
        </tbody>
    </table>
    </details>
3. 파트타이머: 행사 공고에 참여하는 아르바이트생으로, 공고 등록, 공고별 개인 근태 관리 및 채팅 서비스를 사용할 수 있습니다.
    <table>
        <thead>
            <th> 기능
                <td style="text-align:center">공고 등록</td>
                <td style="text-align:center">공고 조회</td>
                <td style="text-align:center">공고 공고 근태 관리</td>
                <td style="text-align:center">공고별 채팅</td>
            </th>
        </thead>
        <tbody>
            <tr>
                <td>화면</td>
                <td>
                    <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.51.11.png?alt=media&token=684a8146-8b9f-467b-babd-4efcfc9ce6d2" />
                </td>
                <td>
                    <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.56.57.png?alt=media&token=95e15d3a-5efb-4074-9f3f-0547afc9b100" />
                </td>
                <td>
                    <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.58.34.png?alt=media&token=01830f42-6b43-47ff-a224-51e80a123a8b" />
                </td>
                <td>
                    <img height="500" src="https://firebasestorage.googleapis.com/v0/b/linket-chat.appspot.com/o/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-08-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.55.50.png?alt=media&token=78a60670-d752-4f08-8eda-1d9699ff7d41" />
                </td>
            </tr>
        </tbody>
    </table>

## 🎬 실행 방법
.env.example의 이름을 .env로 변경한 후에 동작할 환경변수들을 설장하여야 합니다.
> REACT_APP_SERVER_URL : 동작 요청할 백엔드 서버 URL <br/>
> REACT_APP_KAKAO_API_KEY : 카카오 디벨로퍼 API 키 <br />
> REACT_APP_KOPIS_API_KEY : 공연예술통합전산망 API 키 <br />
> REACT_APP_FIREBASE_* : Google Firebase API 키 <br />

🛠️ 현재 백엔드 서버가 배포되어있지 않으므로
[linket-backend](https://github.com/KB-Final-Team-2/linket-backend)
를 통해 로컬 환경에서 테스트할 수 있습니다.