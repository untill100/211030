const main_menu = document.querySelector("#main-menu");
main_menu.innerHTML = `
    <ul id="navigator" class="main-menu-item">
        <li class="navigator-item">
            <p class="en">INFORMATION</p>
            <p class="ko">전시 소개</p>
        </li>
        <li class="navigator-item">
            <p class="en">RESEARCH</p>
            <p class="ko">리서치</p>
        </li>
        <li class="navigator-item">
            <p class="en">ARTISTS</p>
            <p class="ko">아티스트</p>
        </li>
        <li class="navigator-item">
            <p class="en">WHO WE ARE</p>
            <p class="ko">단체 소개</p>
        </li>
    </ul>
    <div id="credit" class="main-menu-item">
        <div class="credit-item">
            <p>
                <small><a href="https://www.instagram.com/crazymultiply" target="_blank">© CRAZY MULTIPLY</a></small>
            </p>
        </div>
    </div>
`;

const main_menu_output_container = document.querySelector("#main-menu-output-container");
main_menu_output_container.innerHTML = `
<div class="menu-output-item" id="about-exhibition">
    <h1 style="margin-bottom: 96px; line-height: 1;" class="emphasis">DOTGIF (.GIF)</h1>
    <h1 class="en">About Exhibition</h1>
    <h1 class="ko">전시 소개</h1>
    <p class="en">
        Since the birth of the internet and the rise in online culture, GIFs and memes were created to bring a sense of levity and humour to everyday life situations along with embodying the feelings of social and political movements across the world.
    </p>
    <p class="en">
        <span class="indent"></span>GIFs and memes provide a quick and easy way for us to connect, and their accessibility allows us to autonomously interact with each other unencumbered by the limitations of distance, linguistics, or cultural barriers -- serving as a common language amongst netizens. With the birth of websites such as eBaum’s World and 4chan to Twitter and Reddit, internet memes have become part of mainstream internet culture and have helped to serve communities on and offline.
    </p>
    <p class="en">
        <span class="indent"></span>This accessibility has aided us to stay sane and engaged amidst a global pandemic, and protestors fighting for social and political movements such as anti-racism and anti-police brutality in the US and the Hong Kong and Myanmar protests, have effectively utilized this access to garner international attention.
    </p>
    <p class="en">
        <span class="indent"></span>Before internet memes, came another new visual language found through the GIF. GIFS were the precursor to internet memes as they began as static images but have since evolved to looped animations. With the ability to convey more through a moving image, the animated GIF was able to crossover with both cultural and aesthetic appeal expanding upon a universal digital vernacular.
    </p>
    <p class="en" style="margin-bottom: 96px;">
        <span class="indent"></span>The purpose of this exhibition is to spotlight the original work of artists who are using GIFs and memes to explore and push the boundaries of these formats.
    </p>
    <p class="ko">
        인터넷의 탄생과 온라인 문화의 부상 이후, GIF와 밈(Meme)은 일상 생활의 단조로움을 덜하고 유머를 더해주며, 더 나아가 세계 곳곳의 사회와 정치 운동 현장의 에너지를 전달하는 등 복합적 소통의 도구로써 우리 삶에 자리잡았다.
    </p>
    <p class="ko">
        <span class="indent"></span>GIF와 밈은 우리 사이의 빠르고 쉬운 연결고리가 되어준다. GIF와 밈 특유의 접근성은 일종의 공용어의 역할을 하며, 네티즌들끼리 물리적 거리, 언어 또는 문화적 장벽의 제약에 구애받지 않고 자율적으로 소통할 수 있게끔 한다. eBaum’s World, 4chan, 트위터(Twitter), 또는 레딧(Reddit)과 같은 웹사이트들의 탄생 이후, 밈은 인터넷 문화의 주류로 자리잡으며 온라인 및 오프라인 커뮤니티에서 유용하게 사용되고 있다.
    </p>
    <p class="ko">
        <span class="indent"></span>이러한 접근성은 팬더믹 속에서 우리가 제정신으로 생활을 이어가는데 도움을 주기도, 미국에서의 인종차별, 과잉진압 반대 운동, 혹은 홍콩과 미얀마 시위와 같은 사회적, 정치적 운동을 위해 싸우는 시위자들에게 국제적인 관심을 끌 수 있는 쉽고 효과적인 방법을 제공하기도 한다.
    </p>
    <p class="ko">
        <span class="indent"></span>이러한 인터넷 밈들의 탄생 이전, GIF를 통한 새로운 시각적 언어의 발견이 이루어지며 정지된 이미지로 시작한 GIF는 반복재생되는 에니메이션으로 발전하였다. 이미지의 가동성을 통해 더 많은양의 정보를 전달할 수 있게 된 GIF는 공통적인 디지털 언어를 통하여 문화간의 경계를 뛰어넘는 메시지를 전달한다.
    </p>
    <p class="ko" style="margin-bottom: 96px;">
        <span class="indent"></span>이번 전시는 GIF와 밈을 사용하여 디지털 매체의 경계를 탐구하고 허무는 작가들의 작업 세계를 조명하고자 한다.
    </p>
    <h1 class="en">Participating Artists</h1>
    <h1 class="ko">참여 아티스트</h1>
    <p class="en" style="margin-bottom: 48px;">
        Sara Kim Ahn
        <br>Marsidinian Alesul
        <br>Mats Nesterov Andersen
        <br>Harmonie Aupetit
        <br>Samantha Blumenfeld
        <br>Meryl Booth
        <br>cocoNreo
        <br>Gina Maree DeNaia
        <br>Estrobomb
        <br>Sharon Ferris
        <br>Wilmer Alexander Gonzalez
        <br>Gabriel Macedonio Guerra
        <br>Jay Hollick
        <br>Dyan Jong
        <br>Youngmi Kim
        <br>Christina Yuna Ko
        <br>Halo Lahnert
        <br>Kopano Maroga
        <br>Robert Matejcek
        <br>Obsolater
        <br>Meg O'Shea
        <br>Avery Ota
        <br>Sunny Park
        <br>Junsu Moon
        <br>Sabato Visconti
        <br>Allyce Wood
        <br>Yizr
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        Sara Kim Ahn
        <br>Marsidinian Alesul
        <br>Mats Nesterov Andersen
        <br>Harmonie Aupetit
        <br>Samantha Blumenfeld
        <br>Meryl Booth
        <br>cocoNreo
        <br>Gina Maree DeNaia
        <br>Estrobomb
        <br>Sharon Ferris
        <br>Wilmer Alexander Gonzalez
        <br>Gabriel Macedonio Guerra
        <br>Jay Hollick
        <br>Dyan Jong
        <br>김영미
        <br>Christina Yuna Ko
        <br>Halo Lahnert
        <br>Kopano Maroga
        <br>Robert Matejcek
        <br>Obsolater
        <br>Meg O'Shea
        <br>Avery Ota
        <br>Sunny Park
        <br>문준수
        <br>Sabato Visconti
        <br>Allyce Wood
        <br>Yizr
    </p>
</div>

<div class="menu-output-item" id="who-are-we">
    <h1 class="en emphasis" style="margin-bottom: 96px; line-height: 1;">HISTORICAL GIF AND MEMES</h1>
    <h1 class="ko emphasis" style="margin-bottom: 96px; line-height: 1;">GIF의 역사와 밈 (MEME)</h1>
    <h1 class="en">What’s a GIF?</h1>
    <h1 class="ko">GIF란?</h1>
    <p class="en">
        GIF is an acronym for Graphics Interchange Format. Created in 1987 by a developer named Steve Wilhite and his team working for the online tech giant, CompuServe, Steve needed to come up with a way to have a computer display an image while simultaneously saving memory. Thus, the GIF was born as he found a way to use a compression algorithm to combine the image parameters, such as the number of available colors (256, commonly known as 8-bit) to easily exchange images between computers without taking up too much memory.
    </p>
    <p class="en" style="margin-bottom: 96px;">
        <span class="indent"></span>
        The first GIF created was a still image of an airplane, to use for a weather map. GIFs originally began as still image files, rather than the dynamic moving images we can find all over the internet these days. The conversion from still image to moving image occurred via a compression algorithm called Lempel-Ziv-Welch, named after its three creators (Abraham Lempel, Jacob Ziv, Terry Welch). How the algorithm worked was it identified repeating patterns, then simplified them, so as no data would be lost during the compression process. A GIF file could include multiple variations of the still image which could create a looping video, which we know as a moving or animated GIF. 
    </p>
    <p class="ko">
        GIF는 Graphic Interchange Format 의 약어이다. 개발자 스티브 윌하이트(Steve Wilhite)는 1987년  테크 자이언트 컴퓨서브(CompuServe)사의 팀원들과 최소량의 메모리를 사용하여 이미지를 디스플레이 하는 방법을 고안하였다. 이미지 구성 색상 수량 (256, 일반적으로 8비트라고 알려진 포맷)을 포함한 이미지 구성 요소를 압축하여 이미지 교환 시 사용되는 컴퓨터 메모리를 최소함으로서  GIF 포맷을 구축하였다.
    </p>
    <p class="ko" style="margin-bottom: 96px;">
        <span class="indent"></span>
        첫 번째 GIF는 가상 지도에 사용되는  비행기의 스틸 이미지이다. 초기 GIF는 요즘 인터넷에서 찾을 수 있는 영상 이미지와는 달리 스틸 이미지 파일로 시작되었다. 정지 영상에서 움직이는 영상으로의 변환은 세 명의 크리에이터 (Abraham Lempel, Jacob Ziv, Terry Welch)의 이름을 딴 Lempel-Ziv-Welch라는 압축 알고리즘을 통해 이루어졌다. 알고리즘의 작동 방식은 반복 패턴을 식별한 다음 단순화하여 압축 프로세스 중에 데이터가 손실되지 않도록 했다. 우리에게 익숙한 영상 GIF 또는 애니메이션 GIF는 반복루프 (Loop) 비디오를 구성하는 여러장의 스틸 이미지를 기반한다.
    </p>
    <!-- -->
    <h1 class="en">Hard “G” vs Soft “G” (The Pronunciation of GIF)</h1>
    <h1 class="ko">GIF의 발음</h1>
    <p class="en">
        Though there is much debate about this topic, the original pronunciation of GIF was with a soft “G” like “giraffe”. It was intended to be a play on the U.S. peanut butter brand Jif’s slogan, “Choosy moms choose Jif”. CompuServe employees could often be heard saying "Choosy developers choose GIF".
    </p>
    <p class="en">
        <span class="indent"></span>
        However at some point, people began pronouncing the word with a hard “G” as in "gift". In 2013, Steve Wilhite drove the soft “g” debate home while accepting a lifetime achievement at the Webby Awards, stating:
    </p>
    <p class="en">
        <span class="indent"></span>
        “The Oxford English Dictionary accepts both pronunciations,” “They are wrong. It is a soft ‘G,’ pronounced ‘jif.’ End of story.”
    </p>
    <p class="en" style="margin-bottom: 96px;">
        <span class="indent"></span>
        Still, in 2017, a poll lead by programming website Stack Overflow showed statistics in favor of using the hard "G" pronunciation,  especially among participants in eastern Europe, though both soft "G" and enunciating each letter as “G-I-F” were found to be popular in Asia and other emerging nations.
    </p>
    <p class="ko">
        이 주제에 대해 많은 논쟁이 있지만, GIF의 원래 발음은 "Giraffe(지래프)"와 같은 부드러운 "G"였다. 미국 땅콩버터 브랜드 지프의 슬로건인 '깐깐한 엄마들이 지프 (JIF)를 선택한다 (choosy moms choose Jif)’ '를 패러디 하여, CompuServe 직원들은 "깐깐한 개발자들은 지프 (GIF)를 선택한다 (choosy developers choose GIF)" 라고 하기 시작했다. 
    </p>
    <p class="ko">
        <span class="indent"></span>
        그러나 어느 순간부터 사람들은 "gift (기프트) "에서처럼 강한 "G" 발음을 사용하기시작했다. 2013년 Steve Wilhite는 Webby Awards 수상 소감에서 이렇게 말하며 논쟁을 중단시켰다. 
    </p>
    <p class="ko">
        <span class="indent"></span>
        “옥스퍼드 영어 사전은 두 가지 발음을 모두 받아들인다 - 그것은 틀렸다. 부드러운 G이다. JIF 라고 발음한다. 이야기 끝.”
    </p>
    <p class="ko" style="margin-bottom: 96px;">
        <span class="indent"></span>
        그럼에도 불구하고 2017년, 프로그램 웹사이트 스택 오버플로우(Stack Overflow)가 주도한 여론조사에서 사람들, 특히 동유럽 국가에서는 강한 G 발음을 선호한다는 통계가 나왔고, 아시아를 비롯한 신흥국에서는 알파벳 하나하나를 강조한다는 (G-I-F 지-아이-에프) 통계 자료가 있다.
    </p>
    <!-- -->
    <h1 class="en">GIFs and Memes</h1>
    <h1 class="ko">GIF와 밈 (Meme)</h1>
    <p class="en">
        In April of 1993 when the internet was made public to the world, the use of GIFs exploded, and with GIFs came the meme. The main difference between a GIF and a meme is that GIFs were intended to be a single low-resolution static or moving image, while a meme is usually a still image created with the intention of conveying a certain behaviour, idea, or style. The term meme was actually coined well before the age of the internet by British biologist, Richard Dawkins, in his book The Selfish Gene in 1976. His use of meme came from the discussion of the concept of evolutionary principles through cultural phenomena and the spreading of ideas.
    </p>
    <p class="en">
        <span class="indent"></span>
        Memes began as a way for internet users to express themselves using images and text mostly for humour, but they have since evolved as a way for people to engage in political and ideological discourse and to push social movements -- such as Occupy Wall Street, Black Lives Matter, and the Alt-Right Movement in the U.S. to the most recent Hong Kong and Myanmar protests.
    </p>
    <p class="en" style="margin-bottom: 96px;">
        <span class="indent"></span>
        With the rise of GIFs and memes and their participatory nature which have helped to push these social and political movements, it is left to be seen how they will evolve and influence humanity further into the future.
    </p>
    <p class="ko">
        인터넷이 세상에 알려진 1993년 4월, GIF의 사용이 폭발적으로 증가했고, GIF와 함께 밈이 탄생하였다. GIF와 밈의 주요 차이점은 GIF는 주로 저해상도의 스틸 또는 영상 이미지인 반면, 밈은 일반적으로 특정 행동, 아이디어 또는 스타일을 전달하기 위해 만들어진 스틸 이미지라는 것이다. 밈이라는 용어는 영국의 생물학자인 리처드 도킨스가 1976년 그의 저서 <이기적 유전자>에서 사용한 용어로 인터넷의 시대 훨씬 이전 부터 사용되어왔다. 밈이라는 단어는 문화 현상과 사상의 확산을 통한 진화 원리의 개념에 대한 논의에서 비롯되었다. 
    </p>
    <p class="ko">
        <span class="indent"></span>
        밈은 인터넷 사용자들이 주로 유머를 위해 이미지와 텍스트를 사용하여 자신을 표현하는 한 방법으로 시작되었지만, 그 이후로 정치적으로 이용되기 시작하여, 미국의 월가 점령 시위, Black Lives Matter 운동, 알트라이트 부터 최근의 홍콩, 미얀마 시위까지 사회 운동을 추진하는 역할을 하기도 한다.
    </p>
    <p class="ko" style="margin-bottom: 96px;">
        <span class="indent"></span>
        이렇게 GIF와 밈의 정치 참여적 현상이 시작되면서, 우리는 앞으로 GIF와 밈이 인류에게 어떤 진화와 영향을 미칠 지 기대해 볼 만 하다.
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/1a.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;The First GIF&gt;</b>
            <br>Created by former tech giant CompuServe by a team of its developers, namely Steve Wilhite, the first GIF was released in 1987 under the title “87a”. It was created to replace the black and white text-based code that would appear during the process of downloading files, and provided a color image instead. It was later enhanced by CompuServe in 1989 as a delayed animated GIF, titled “89a”.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;최초의 GIF&gt;</b>
            <br>스티브 윌화이트를 포함한 20세기 테크 자이언트 컴퓨서브의 프로그래머 팀이 제작한 이 GIF는 ‘87a’라는 타이틀로 1987 대중에 공개되었다. 당시 파일 다운로드 시 볼 수 있던 흑백그래픽을 대체하고자 제작된 GIF로 차후 1989년 ‘89a’라는 타이틀과 보완된 그래픽으로 재탄생하였다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/2.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Netscape Logo GIF&gt;</b>
            <br>Netscape Navigator was released in 1994 and was one of the first web browsers to be used publicly world wide. It was the dominant browser before Internet Explorer eclipsed it along with other competitors in the “first browser war”. In 1995 Netscape Navigator enabled continuous looping of animated GIFS, which are what are now mostly commonly considered a GIF. The Netscape Communication Company was also the creator of the programming language, Javascript, which was created specifically for browsing on Netscape Navigator.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;넷스케이프 (Netscape)의 로고 GIF&gt;</b>
            <br>넷스케이프 (Netscape)의 로고 GIF -  넷스케이프 내비게이터는 1994년에 출시되었으며 전 세계적으로 보편화 된 최초의 웹 브라우저 중 하나였다. 인터넷 익스플로러가 "1차 브라우저 대전"에서 다른 경쟁자들과 함께 넷스케이프를 앞지르기 전 까지는 가장 자주 사용되었던 브라우저이다. 넷스케이프는 1995년 지속적인 루프로 반복되는 애니메이션 GIF를 브라우저에 기능화 하여 현재 보편화된 GIF 포맷의 첫 플랫폼을 제공하였으며, 넷스케이프 내비게이터를 사용하기위한 프로그래밍 언어 Javascript를 제작하는 등 온라인 문화 초기에 무시하지 못할 흔적을 남긴다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/3.jpg" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Barbara Kruger’s ‘Untitled’ (1981)&gt;</b>
            <br>Intricate Rituals originates from Barbara Kruger’s ‘Untitled (You Construct Intricate Rituals)’(1981), which displays her signature declarative captions overlaid onto a black and white photograph of men roughhousing each other. Staying true to Kruger’s original work, the term ‘Intricate Ritual’ has been used online to describe homoerotic activities carried on by seemingly hetrosexual men, poking fun at the absurdity of the ‘no homo’ culture and fragile (straight) masculinity.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;바바라 크루거 - 무제&gt;</b>
            <br>바바라 크루거의 ‘무제 (너희는 복잡한 관습을 지어낸다)’(1981)에서 유래한 ‘복잡한 관습(Intricate Rituals)’는 작품 속 장난으로 씨름을 하고 있는 남성들의 흑백사진 위 크루거 특유 텍스트 스타일의 부제목을 밈화한다. 원작의 의도에 충실한 밈은 온라인상에서 이성애자를 자칭하는 남성들의 동성애적 행위를 묘사하는 데 사용되며, 습관적으로 '난 호모 아니야'(No homo) 울부짖는 현대사회의 아이러니와 연약한 남성성을 풍자한다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/4.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;The More You Know&gt;</b>
            <br>“The More You Know” was a popular PSA in the late 80s to early 00s featuring celebrities such as Jennifer Aniston, as well as U.S. presidents Bill Clinton and Barack Obama, that emphasized education. Later, it was parodied on shows like The Office (U.S. version), Youtube, and The Family Guy where they would satirically highlight incorrect or humorous facts using the slogan, which became a well-known meme and hashtag on Twitter.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;The More You Know&gt;</b>
            <br>"The More You Know"는 80년대 후반부터 2000년대 초반까지 자주 사용되었던 공익광고 슬로건으로 빌 클린턴과 버락 오바마 뿐만 아니라 제니퍼 애니스톤과 같은 유명인사들이 출연 하였다. 그 후 오피스 와 패밀리가이 등 TV 프로그램과 유튜브 블로거들은  부정확하거나 유머러스한 사실들을 풍자적으로 보도할 때 이 슬로건을 사용하여 패러디 하였고, 트위터에서 해시태그 및 밈화되었다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/5.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Glitter GIF&gt;</b>
            <br>Glitter gifs emerged at the end of the 20th century as a way for preteens to animate still images with sparkling and blinging “stamps” to create personalized shiny, moving graphics. They have since become part of the larger internet culture where they can be found everywhere from personal blogs to global advertising campaigns.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;글리터 GIF&gt;</b>
            <br>글리터 GIF는 20세기 후반, 십대들이 스틸 이미지에 반짝이는 그래픽을 더해 애니메이션화 하는 것으로 시작되었습니다. 그 후로 개인 블로그에서부터 글로벌 광고 캠페인에 이르기까지 어디에서나 발견될 수 있는 인터넷 문화의 일부가 되었다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/6.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Baby Cha-Cha&gt;</b>
            <br>Dancing Baby aka Baby Cha-Cha was the first viral meme on the internet. Created in 1996 as a 3D rendered animation of a baby doing the cha-cha as a product sample file, it received mainstream attention through its appearance on the popular U.S. primetime television show series ‘Ally McBeal’ and soon became a worldwide media phenomenon.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;베이비 차차&gt;</b>
            <br>(베이비 차차로 더 알려진) 댄싱 베이비는 처음으로 널리 유행하게 된 밈이다. 1996년에 만들어진 차차를 추는 아기의 3D 렌더링 애니메이션이며, 미국의 인기 텔레비전 쇼 시리즈 '앨리 맥벨'에 출연하여 큰 주목을 받았고 곧 세계적인 미디어 현상이 되었다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/7.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;That's Racist!&gt;</b>
            <br>The “That’s Racist!” GIF began making its rounds in response to racist and less than politically correct conversations that could be found around the world wide web. Originally from the MTV2 early-2000s sketch comedy, Wonder Showzen, the GIF is based from a video of the child indeed saying “That’s racist!” following the end of one of the episode’s skits. It intentionally satirizes the look of late 70s-mid 80s children’s educational videos.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;그건 인종차별이야!&gt;</b>
            <br>“그건 인종차별이야!” GIF는 전 세계 인터넷 상에서 찾아볼 수 있는 인종 차별적이고 “정치적 올바름” 에서 벗어나는 대화에 대한 반응으로 사용되었다. 이 GIF는 2000년대 초반 MTV2의 스케치 코미디인 <원더 쇼젠>의 쇼가 끝난 후  "그건 인종차별이야!" 라고 말하는 아이의 비디오에서 비롯되었으며, 그것은 70대 후반에서 80대 중반의 어린이 교육 비디오의 모습을 풍자한다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/8.jpeg" style="margin-bottom: 16px;" />
    <img src="../../public/assets/artworks/historical/8a.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Cyworld GIF&gt;</b>
            <br>Cyworld GIFs - Cyworld was the social media platform in 2000s Korea. (Equivalent of Livejournal) It was all about things that would now be referred to as “#deep”. People would upload GIFs with corny quotes (https://blog.daum.net/dhdhltns700/2110) with their posts. Nowadays, celebrities’ Cyworld pages with cringey posts are becoming memes. The most famous one is Chaeyeon’s crying selfie.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;싸이월드 GIF&gt;</b>
            <br>2000년대 한국에서 가장 많이 쓰인 SNS는 당연 싸이월드이다. 사람들은 자신의 싸이월드에 온갖 감성글과 함께 오글거리는 글귀짤들을 올리기 시작했다. 지금은 과거 연예인들의 새벽감성글들이 다시금 밈화되어 사용되고 있다. 예를 들어 그 유명한 채영 눈물셀카짤이라던가.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/9.jpg" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Pepe the Frog&gt;</b>
            <br>Originated from Matt Furie’s comic series Boy's Club, various versions of the ‘Pepe the Frog’ meme have been used by internet trolls, celebrities, politicians, institutions, activists, and more. ‘Rare Pepe’ images started to become sought after by avid enthusiasts and ‘Rare Pepes’ were being sold on eBay well before the recent rise of NFTs. Pepe the frog has been used as a political symbol to further perpetuate alt-right ideas by groups such as Trump supporters and supporters of Marine Le Pen, whilst by activists in Hong Kong as a symbol of the pro-democracy movement. “Pepe the Frog’s visual meaning is something like sad resistance. It’s what he meant to white supremacists at first too—regardless of the validity of their feelings of oppression.”
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;개구리 페페 (Pepe the Frog)&gt;</b>
            <br>매트 퓨리의 만화 시리즈 보이즈 클럽에서 유래된 다양한 버전의 '페페' 밈은 인터넷 트롤, 연예인, 정치인, 공공기관, 정치운동가 등 많은 이들이 사용해왔다. '희귀 페페' 이미지는 열렬한 팬들에게 인기를 끌기 시작했고 '레어 페페' 이미지는 최근 NFT가 활성화 되기 훨씬 전 이베이에서 판매되기도 하였다. 트럼프 서포터들과 마린 르펜 지지자들 사이에서는 극우 사상을 전파하는 정치적 상징으로, 반면 홍콩 운동가들에게서는 민주화 운동의 상징으로 사용되었다. "페페의 시각적 의미는 슬픈 저항이라 볼 수 있다. 백인인권이 탄압된다 느끼는 백인 우월주의자들 또한 그 억압감정의 타당성에 상관없이 이러한 이유로 페페를 사용하기 시작하였었다.”
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/10.jpg" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Feels Guy/Wojak&gt;</b>
            <br>Visual variant and successor of rage comics posted to Memebase, Cheezburger, and 4chan from mid-2008 well into 2012, Feels Guy continues the trend of Microsoft Paint characters that become exploited into narrative (ex. 4-panel) or comparison templates (ex. Virgin vs. Chad). Originating in 2010 from a Polish image board, Wojak, as it became known, gained mainstream usage after an image of the character hugging another character with the text “I know that feel bro” became viral when it was posted to vichan, a Polish image-based forum, and was reposted to 4chan not long after that. The character can be used to express melancholy, emptiness, or the lack of an emotional reaction, and its visual style can be seen as a bridge between Wojaks and Rage Comics. With Gen Z coming of age during Covid quarantine, Wojaks and their variants proliferated on 4chan and Reddit, and upon being posted to Twitter between 2019 and 2020, the format gained additional characters and variants used to critique white privilege and overrepresentation, while simultaneously becoming an icon for disaffected male youth internet subgroups and cultures as they continue to be posted and reappropriated on 4chan in a variety of contexts.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;필스 가이(Feels Guy)/워작(Wojak)&gt;</b>
            <br>2008년 중반부터 2012년까지 Memebase, Cheezburger 및 4chan에 게시된 rage comics 시리즈의 시각적 변종이자 후속작으로 4 패널 내러티브 또는 ‘Virgin vs. Chad’과 같은 비교 템플릿 밈에서 활용되는 마이크로소프트 그림판 스타일 캐릭터 트렌드를 이어간다. 2010년 폴란드의 이미지 게시판에서 유래한 워작은 "I know that feel bro"라는 문구와 다른 캐릭터를 껴안는 이미지가 폴란드 이미지 포럼 vichan에 올려진 후 빠르게 공유되어 얼마 지나지 않아 4chan으로 전파되었다. 우울함이나 공허함, 감정적 반응의 결여를 표현할 수 있는 캐릭터로, 특유의 아트 스타일은 워작과 비슷한  rage comics 의 가교로 볼 수 있다. 코로나바이러스로 인한 세계적 격리시대와 동시에  Z세대가 성년이 되면서 워작과 그 변종들이 4chan과 레딧에서 다시한번 유행하였고, 2019년에서 2020년 사이 트위터에 포스팅 되며 백인 특권 문화를 비판하는 데 사용되는 캐릭터와 변종들이 발생한 반면, 동시에 4chan 포럼에서 출몰하는 남성 온라인 그룹의 불만을 대변하는 아이콘으로도 꾸준히 사용되고 변의해왔다.            
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/11.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Nyan Cat&gt;</b>
            <br>Nyan Cat (pronounced “neon”) was created as an homage to the artist Christopher Torres’ deceased cat, Marty, who “crossed the Rainbow Bridge but lives on in spirit”. Torres posted this GIF to his website LOL-Comics in 2011 and it quickly became an internet sensation. Earlier this year for its 10-year anniversary, he sold it as an NFT for 300 ETH ($782,677USD) on the crypto art auction platform, Foundation.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;니얀 캣(Nyan Cat)&gt;</b>
            <br>니얀 캣(Nyan Cat) 은 예술가 크리스토퍼 토레스의 죽은 고양이 마티에 대한 오마주로써 제작되어 "무지개다리를 건너지만 스피릿은 우리와 언제나 함께하는" 마티의 모습을 영상화 한다. 토레스는 2011년 자신의 웹사이트인 LOL-Comics에 이 GIF를 올렸고 순식간에 인터넷에서 큰 인기를 끌었다. 올해 초, 암호화폐 경매 플랫폼인 Foundation에서 NFT화된 니얀캣은 300 ETH(782,677달러)에 낙찰되었다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/13.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Baby Chloe&gt;</b>
            <br>A recent and maybe a more updated version of using a child’s expression, the “Baby Chloe” GIF is one of the 50 most popular GIFs according to an influencer website. It’s used to express universal emotions from confusion, wtf, or general disbelief. GIFs have been popular for expressing the emotion of the user.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;베이비 클로이 (Baby Chloe)&gt;</b>
            <br>아이의 감정표현을 사용한 더 최근의 GIF인 “베이비 클로이"는 한 인플루엔서의 웹사이트에 따르면 가장 많이 쓰이는 GIF 50개 중 하나이며, 혼란스러움, 시발 뭐야?(WTF), 혹은 불신같은 감정을 표현하는데 널리 쓰이고 있다. GIF는 사용자의 감정을 표현하는 도구로 많이 쓰이고 있다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/14.jpeg" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;On Fire&gt;</b>
            <br>Many people may be familiar with the image of these two comic panels originally from a six panel 2013 webcomic called “On Fire” by KC Green. While there have been many altered versions of this meme, it works well on its own to encompass the feelings of dread, inertia, or discontent from whatever situation. Adult Swim even turned it into a 17-second animation which you can find here: <a href="https://www.youtube.com/watch?v=0oBx7Jg4m-o&t=15s" target="_blank">https://www.youtube.com/watch?v=0oBx7Jg4m-o&t=15s</a>
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;On Fire&gt;</b>
            <br>많은 사람들이 KC Green의 "On Fire"라고 불리는 2013년 6컷 웹코믹에서 유래한 이 이미지에 익숙할 것이다. 이 밈은 다른 여러 밈으로 또 다시 변형되곤 했지만, 모두 두려움, 무관심? 또는 불만의 감정을 표현하는 것으로 사용된다. Adult Swim은 이것을 17초짜리 애니메이션으로 만들기도 했다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/15.gif" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Lo-fi Girl&gt;</b>
            <br>With the beginning of the new millennium, micro-blogging website, Tumblr, became a popular hub for millennials to find and share imagery collected from the internet and beyond. Relaxing animated 80s anime aesthetic gifs became part of the vibe for “lo-fi” and Vaporwave, a chopped and screwed musical and visual style reminiscent of smooth jazz, muzak, R&B and hip-hop from the 1980s and 1990s. In 2017, a YouTube channel originally called ChilledCow began streaming 24/7 lo-fi hip-hop for studying, accompanied by this custom animated character modeled after the protagonist from Studio Ghibli animation, Whisper of the Heart. The design was created by artist Santo Puppy. She quickly became viral with over 218 million views and is referred to as “Lo-fi Girl” or “Lo-fi Study Girl”. Since her inception, there have been many renditions of her created by other artists worldwide.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;로파이 걸&gt;</b>
            <br>2000년대 초, 소셜 미디어와 마이크로 블로깅 웹 사이트인 텀블러는 밀레니엄 세대들이 인터넷에서 수집한 이미지를 찾고 공유할 수 있는 플랫폼이 되었다. 80년대 애니메이션 감성의 GIF는 로파이 (lo-fi)음악과 8-90년대의 재즈, 뮤작(muzak), R&B와 힙합을 실험적으로 뒤틀고 편집하는 음악 및 비주얼 장르인 베이퍼웨이브(vaporwave)의 일부가 되었다. 2017년, 유튜브 채널 ChilledCow는 스튜디오 지브리 ‘귀를 기울이면’의 주인공을 모델로 한 애니메이션 캐릭터를 배경으로 공부환경 조성을 위한 24시간 로파이 힙합을 스트리밍하기 시작한다. 아티스트 산토 퍼피가 디자인한 영상 속 캐릭터는  2억 1천 8백만 건의 조회수를 기록하며 빠르게 대중화 되었고 "로파이 걸" 또는 "로파이 스터디 걸"로 불리기 시작하였으며, 이후 전 세계 다양한 아티스틀은 여러 버전의 로파이 걸을 제작하게 된다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/16.jpg" style="margin-bottom: 16px;" />
    <img src="../../public/assets/artworks/historical/16a.jpg" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Our Parent's GIF&gt;</b>
            <br>While it’s easy to think that GIF culture is for the younger generations, GIFs are frequently used in text messages sent by elders and older generations (From Generation X, Baby Boomers and earlier). We never know how they ended up in our parents’ camera roll...
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;엄빠 최애짤&gt;</b>
            <br>GIF을 젋은 세대의 전유물이라 여기기 쉽지만, 부모님 세대, 때로는 그 윗 세대가 애용하는 “엄빠 최애짤" 이 있다. 이 짤들이 엄마 아빠 손에 어떻게 들어가게 되었는지는 잘 모르겠지만…
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/17.jpg" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Meme as a Life&gt;</b>
            <br>When COVID-19 became a global threat, it hindered students around the world by putting a standstill to their normal face-to-face studies, moving everything online. In the U.S., students began posting about their pandemic life (such as emails, texts, etc.) and those in itself began to become memes.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;삶으로서의 밈&gt;</b>
            <br>코로나19가 전세계적인 위험으로 등급하며 대다수의 학교들이 온라인 수업으로 전환하기 시작했다. 미국의 학생들은 이러한 전환 후 자신들의 격리 속 삶에서 일어나는 일들 (끊이지 않는 이메일, 문자 등)을 포스팅하며 삶 자체를 밈으로 만들었다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/18.jpeg" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Bernie Mittens Meme&gt;</b>
            <br>One of the most circulated images turned meme in 2021 was of United States Senator Bernie Sanders (also called the “Bernie Mittens Meme”) sitting cross-legged in the cold at Joe Biden’s U.S. presidential inauguration in a pair of hand-knit mittens. Bernie-lovers everywhere were quick to facilitate the memorable pose into humorous memes that were spread around the world. This one is of him sitting in on performance artist Marina Abramović’s, The Artist is Present.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;버니 손모아 장갑&gt;</b>
            <br>2021년 미국에서 가장 많이 사용된 밈은 미국의 버니 샌더스 의원이 조 바이던의 대통령 취임식에서 손모아 장갑을 끼고 다리를 꼬아 앉은 사진이다. (“버니 손모아 장갑 짤(Bernie Mittens Meme)"로 알려져 있다.) 버니 샌더스의 팬들은 이 사진을 다른 여러 사진과 합성해 밈화시키기 시작했다. 이 사진은 버니 샌더스가 마리아 아브라모비치의 “The Artist is Present” 퍼포먼스에 앉아있는 밈이다.
        </small>
    </p>
    <!-- -->
    <img src="../../public/assets/artworks/historical/19.jpg" style="margin-bottom: 16px;" />
    <p style="margin-bottom: 96px;">
        <small class="en">
            <b>&lt;Myanmar Protest&gt;</b>
            <br>Protestors have been effectively utilizing memes to generate international attention, create a sense of levity in times of struggle, and accentuate the peaceful nature of their citizen’s protests. Some of the protestors, and specifically lawyers, have been seen using emoji masks to protect their identities.
        </small>
        <small class="ko" style="line-height: 1.7;">
            <b>&lt;미얀마의 시위자&gt;</b>
            <br>미얀마 시위자들은 밈을 효과적으로 활용하여 국제적인 관심을 불러일으키고, 투쟁의 시기에 위압감을 조성하고, 자국민 시위의 평화적 성격을 부각시키고 있다. 몇몇 시위자들, 특히 변호사들은 그들의 신분을 보호하기 위해 이모지 마스크를 사용하는 것이 목격되었다.
        </small>
    </p>
    <!-- -->
    <h1 class="en">NFTs</h1>
    <h1 class="ko">NFTs</h1>
    <p class="en">
        NFTs (Non-Fungible Tokens) are digital works of art such as images, GIFs and videos that can be purchased online. They were created in 2014 by Kevin McCoy and Anil Dash as part of a conference at the New Museum in New York City.
    </p>
    <p class="en">
        <span class="indent"></span>
        Collectors have their ownership certified through blockchain technologies, which provides sole owning rights to the collectors whose purchased works may otherwise be copied and replicated endlessly, as is the nature of digital works of art. They started to receive mainstream attention in 2017 with ‘CryptoKitties’, a platform that allowed people to adopt and customize limited-edition digital cats with cryptocurrency. Now in 2021 with the continued lack of offline opportunities to purchase artworks due to Covid-19, NFTs have begun gaining international attention.
    </p>
    <p class="en">
        <span class="indent"></span>
        The NFT market in Korea is also gaining traction, with auction houses developing their crypto art trading systems and the artist Mari Kim’s work selling at 600,000,000 KRW (roughly $530,000) in May 2021. Popular memes and GIFs are also being sold as NFTs; the Japanese Shiba Inu ‘Doge’ meme was made into an NFT and sold for $4 million in June of this year, making it the most expensive NFT meme thus far.
    </p>
    <p class="en" style="margin-bottom: 48px;">
        <span class="indent"></span>
        There are certain benefits to NFTs such as providing often-disregarded digital artists a newfound platform. It also gives young and/or up-and-coming  artists access to the world of contemporary fine art - which is known for its exclusivity and inherent biases. But with that, there are darker sides to the NFT trades: money laundering, copy-right infringements, and detrimental amounts of energy being poured into sustaining the technologies, etc.
    </p>
    <p class="ko">
        NFT(Non-Fungible Token)는 이미지, GIF, 비디오 등 온라인에서 구매할 수 있는 디지털 아트를 가리킨다. 2014년 케빈 맥코이와 아닐 대쉬가 뉴욕 뉴뮤지엄에서 열린 세미나의 일환으로 첫 NFT를 제작하였다.
    </p>
    <p class="ko">
        <span class="indent"></span>
        NFT는 무한 복제와 배포가 가능한 디지털 아트 특성을 감안하여 블록체인 기술을 통해 구매한 작품의 소유권을 인증하며 콜렉터에게 독점 소유권을 부여한다. 2017년부터 한정판 디지털 고양이를 암호화폐로 입양하고 커스터마이징할 수 있는 플랫폼인 '크립토키티즈'를 계기로  주목을 받기 시작한 NFT는 2021년 코로나 사태로 인해 오프라인에서 미술품을 구입할 기회가 계속 줄어들며 국제적인 주목을 받기 시작했다.
    </p>
    <p class="ko">
        <span class="indent"></span>
        아트 옥션들이 크립토 아트 거래시스템을 개발하고 2021년 5월 작가 마리킴의 NFT 작품이 6억 원에 낙찰되는 등 국내 NFT 시장 또한 주목받기 시작하였다. 유명한 밈과 GIF도 NFT로 판매되고 있으며, 일본의 시바 이누 'Doge' 밈 NFT는 올해 6월 4000만 달러에 낙찰되어 현재 가장 비싼 NFT 밈으로 등극하였다.
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        <span class="indent"></span>
        NFT는 예술계에서 무시 받기 쉬운 디지털 아티스트에게 새로운 플랫폼을 제공하고, 젊은 작가들에게 보수적이고 배타적인 현대 미술계에 접근할 수 있는 기회를 선사하는 등의 장점이 있지만, 이와 함께 자금세탁, 저작권 침해, 테크놀로지를 유지하기 위해 사용되는 방대한 양의 에너지 등 어두운 면 또한 존재한다.
    </p>
</div>

<div class="menu-output-item" id="floor-plan">
    <h1 style="margin-bottom: 96px; line-height: 1;" class="emphasis">ROOM 1—3D/GLITCH</h1>
    <!-- -->
    <h1>
        Dyan Jong
        <br>
        <small class="en" style="margin-top: 8px;">Los Angeles, California, USA</small>
        <small class="ko" style="margin-top: 8px;">미국, 캘리포니아 주, 로스앤젤레스</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Dyan is a Taiwanese-American director and artist based in Los Angeles. In her ten years in music and entertainment, she’s worn every visual hat from concept to post: photographer, GIF artist, retoucher, director, light installation, creative director, and virtual production.
        <br><br>
        <a href="http://dyanjong.com" target="_blank">http://dyanjong.com</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        다이안 종은 로스앤젤레스에 기반을 둔 대만계 미국인 감독이자 작가로, 음악 및 엔터테인먼트 분야에서 10년간 종사하며 사진작가, GIF 아티스트, 리터처, 감독, 조명 설치, 크리에이티브 디렉터, 가상 프로덕션 등 컨셉에서 후반 작업까지 시각 디자인의 모든 업종을 꿰뚫은바 있다.
        <br><br>
        <a href="http://dyanjong.com" target="_blank">http://dyanjong.com</a>
    </p>
    <!-- -->
    <div style="width: 100%; height: 25px; background-color: white;"></div>
    <h1>
        Gabriel Macedonio Guerra
        <br>
        <small class="en" style="margin-top: 8px;">Seoul, South Korea</small>
        <small class="ko" style="margin-top: 8px;">대한민국, 서울</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Guerra’s art pieces are musically inspired frenetic arrangements. For him to be at peace, the musical selection must match the focal point and colors used to make the perfect blend. Influences are derived from friends, contemporaries, and artists. Seoul by way of Chicago.
        <br><br>
        <a href="https://www.instagram.com/mace_guerra" target="_blank">https://www.instagram.com/mace_guerra</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        디제이로서도 활동하고 있는 작가는 주로 음악에서 영감을 얻은 화려한 시각적 배열을 통한 작업을 추구한다. 선정된 음악은 작품에 사용된 구도와 색상과 완벽한 조화를 이루어야 한다. 작가의 영감은 주로 그의 친구들, 동시대인들, 그리고 다른 예술가들이며 본인의 작업을 통해 그들에게 경의를 표하고자 한다.
        <br><br>
        <a href="https://www.instagram.com/mace_guerra" target="_blank">https://www.instagram.com/mace_guerra</a>
    </p>
    <!-- -->
    <h1>
        Marsidinian Alesul
        <br>
        <small class="en" style="margin-top: 8px;">Bucharest, Romania</small>
        <small class="ko" style="margin-top: 8px;">루마니아, 부쿠레슈티</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Marsidinian is an Endless Artist of the Unfinishable.
        <br><br>
        <a href="https://www.facebook.com/marsidnian" target="_blank">https://www.facebook.com/marsidnian</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        마르시디니안 알레술은 끝없는 미지의 예술가이다.
        <br><br>
        <a href="https://www.facebook.com/marsidnian" target="_blank">https://www.facebook.com/marsidnian</a>
    </p>
    <!-- -->
    <h1>
        Sabato Visconti
        <br>
        <small class="en" style="margin-top: 8px;">Northampton, Massachusetts, USA</small>
        <small class="ko" style="margin-top: 8px;">미국, 매사추세츠, 노스햄턴</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Sabato Visconti is a Brazilian-born new media artist and photographer based in Western Massachusetts. He began experimenting with glitch and digital media in 2011 with the help of a defective memory card that randomly wrote zeroes on JPEG files. Since that moment, he sought to explore how imaging practices have become absorbed by digital processes, hybridized media, online networks, and machine intelligence –technologies that have also enabled apparatuses for social conditioning, mass surveillance, and necropolitics. His work captures the plight of the subject in the face of environmental turbulence driven by systems designed to fail and malfunction.
        <br><br>
        <a href="https://www.sabatobox.com" target="_blank">https://www.sabatobox.com</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        사바토 비스콘티는 브라질 태생의 뉴미디어 아티스트이자 사진작가로 미국 메사추세츠주 서부를 기반으로 활동한다. 2011년 JPEG 파일에 의도하지 않은 ‘0’를 얹는 고장난 메모리 카드의 도움으로 글리치와 디지털 미디어를 실험하기 시작한 후, 작가는 이미지 작업이 어떠한 형식으로 디지털 프로세스, 하이브리드 미디어, 온라인 네트워크 및 기계지능에 흡수되었는지 꾸준한 탐구를 계속하였다. 사회 조건형성, 대중감시 및 네크로폴리틱스에도 사용되는 테크놀로지를 탐구하는 작가의 작업은 고장과 오작동을 목적으로 설계된 시스템과 직면한 존재의 곤경을 포착한다.
        <br><br>
        <a href="https://www.sabatobox.com" target="_blank">https://www.sabatobox.com</a>
    </p>
    <!-- -->
    <h1>
        Samantha Blumenfeld
        <br>
        <small class="en" style="margin-top: 8px;">Seoul, South Korea</small>
        <small class="ko" style="margin-top: 8px;">대한민국, 서울</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Samantha Blumenfeld is a screenprint, new media, and installation artist living and working in Seoul. She studied printmaking at the Rhode Island School of Design and Visual Art at Columbia University. Through her attempts to reconcile her own past, as a young internet user in the late 90s, with her experience in image-reproduction as a classically trained printmaker, she appropriates both mediums into her work. She has exhibited domestically in South Korea including at Alternative Art Space Loop, Space XX, and Cica Museum, and globally including Tate Modern and in collaboration with Serpentine Gallery. She was a previous curator for The Wrong New Art Biennale. She currently co-runs a printmaking studio that also collaborates on fine art editions, as well as creating her own work alongside other artists.
        <br><br>
        <a href="https://www.instagram.com/roribleu/" target="_blank">https://www.instagram.com/roribleu/</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        사만다 블루멘펠드는 서울에서 거주하고 있는 판화가, 뉴미디어, 설치작가이다. Rhode Island School of Design에서 판화를, Columbia University에서 시각예술을 공부하였다. 90년대 후반 어린 인터넷 유저였던 면모와 고전적인 아트 트레이닝을 받은 판화예술가로서의 정체성을 접목하는 방법으로 이 두 상반되는 매체를 함께 사용하는 작업을 한다. 국내에서 대안공간 루프, 스페이스 XX, CICA 미술관 및 국외에서는 테이트 모던에서 전시 경험이 있으며 서펜타인 갤러리와 콜라보레이션한 바도 있다. The Wrong New Art Biennale에서 큐레이터로 참여한 경험이 있으며 현재 서울에서 판화 작업실을 운영중이다.
        <br><br>
        <a href="https://www.instagram.com/roribleu/" target="_blank">https://www.instagram.com/roribleu/</a>
    </p>
    <!-- -->
    <h1>
        Sharon Ferris
        <br>
        <small class="en" style="margin-top: 8px;">United Kingdom</small>
        <small class="ko" style="margin-top: 8px;">영국</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Sharon Ferris is a Scottish digital artist that explores the digital aesthetic by responding to the phenomena of living in today’s intangible & ephemeral world. The artist’s practice documents events or facts of the exceptional, unusual or abnormal of an observable experience.
        <br><br>
        <a href="www.thedesigntherapist.co.uk" target="_blank">www.thedesigntherapist.co.uk</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        샤론 페리스는 현시대 무형의 세계에서 일어나는 현상에 대응하여 디지털 미학을 탐구하는 스코틀랜드 출신의 디지털 아티스트이다. 작가는 작업을 통하여 물리적으로 관찰할 수 있는 예외적, 비정상적 사건 및 사실을 기록한다.
        <br><br>
        <a href="www.thedesigntherapist.co.uk" target="_blank">www.thedesigntherapist.co.uk</a>
    </p>
    <!-- -->
    <h1>
        Wilmer Alexander Gonzalez
        <br>
        <small class="en" style="margin-top: 8px;">South Los Angeles, California, USA</small>
        <small class="ko" style="margin-top: 8px;">미국, 캘리포니아 주, 사우스 로스앤젤레스</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Wilmer Alexander Gonzalez is a neo-pop artist and graphic designer from South Los Angeles, California. Dot Com is the artist’s alias, a reflection of nostalgia and trauma, mad tv shows, the internet, and the end and beginning of wonderfully ethereal, odd, oxymoronic, and comedic timings.
        <br><br>
        <a href="https://www.instagram.com/snrwilmer" target="_blank">https://www.instagram.com/snrwilmer</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        윌머 알렉산더 곤잘레스는 캘리포니아 남부 로스앤젤레스 출신의 네오 팝 아티스트이자 그래픽 디자이너이다. 작가의 일명인 ‘닷컴’은 향수와 트라우마, 광적인 TV 쇼, 인터넷, 그리고 놀라울 정도로 비현실적인, 이상한, 모순된, 희극적인 타이밍들의 끝과 시작을 반영한다.
        <br><br>
        <a href="https://www.instagram.com/snrwilmer" target="_blank">https://www.instagram.com/snrwilmer</a>
    </p>
    <!-- -->
    <h1>
        Yizr
        <br>
        <small class="en" style="margin-top: 8px;">Chicago, Illinois, USA</small>
        <small class="ko" style="margin-top: 8px;">미국, 일리노이주, 시카고</small>
    </h1>
    <p class="en" style="margin-bottom: 96px;">
        Yizr is Yaw Asare. He is a 3D animator based in Chicago, IL. He uses Blender 3D to create motion graphics and abstract art.
        <br><br>
        <a href="https://www.instagram.com/yizr___" target="_blank">https://www.instagram.com/yizr___</a>
    </p>
    <p class="ko" style="margin-bottom: 96px;">
        Yizr라는 이름으로 활동중인 요 아사르는 일리노이 주 시카고에 기반을 둔 3D 애니메이터로, Blender 3D를 사용하여 모션 그래픽과 추상 예술을 작업을 한다.
        <br><br>
        <a href="https://www.instagram.com/yizr___" target="_blank">https://www.instagram.com/yizr___</a>
    </p>
    <!-- -->
    <h1 style="margin-bottom: 96px; line-height: 1;" class="emphasis">ROOM 2—RETRO STYLE</h1>
    <!-- -->
    <h1>
        Christina Yuna Ko
        <br>
        <small class="en" style="margin-top: 8px;">Queens, New York, USA</small>
        <small class="ko" style="margin-top: 8px;">미국, 뉴욕, 퀸즈</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Christina Ko is a Korean American artist living and working in Queens, NY. She received her BFA from Cornell University in 2013 and has since shown her work in Los Angeles, CA, Washington D.C., and NYC. Selected exhibitions include: “In Good Taste”, Dinner Gallery, New York, NY (2021); “Futures Ever Arriving”, Chelsea Market, New York, NY (2021); “Internal Arrangements”, Trestle Gallery, Brooklyn, NY (2020); “Downloading Place”, Wave Hill, Bronx, NY (2019); “Fever Lure”, Selenas Mountain Gallery, Brooklyn, NY (2019); “Crossover: East and West”, Korean Cultural Center, Washington D.C. (2018). Her work has been featured in Gallery Gurls, the Arcade Project Zine, Hiss Magazine, The Fader magazine, The Washington Post, and Ballpit Magazine.
        <br><br>
        <a href="http://christinayunako.com/" target="_blank">http://christinayunako.com/</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        크리스티나 고는 뉴욕 퀸즈에 거주하고 있는 한국계 미국인 예술가이다. 2013년 코넬 대학에서 BFA학위 취득 후 로스앤젤레스, 워싱턴 D.C, 와 뉴욕 등에서 전시를 계속하였다. “In Good Taste”, Dinner Gallery, New York, NY (2021); “Futures Ever Arriving”, Chelsea Market, New York, NY (2021); “Internal Arrangements”, Trestle Gallery, Brooklyn, NY (2020); “Downloading Place”, Wave Hill, Bronx, NY (2019); “Fever Lure”, Selenas Mountain Gallery, Brooklyn, NY (2019); “Crossover: East and West”, Korean Cultural Center, Washington D.C. (2018) 등의 전시에서 작품을 선보였으며, Gallery Gurls, the Arcade Project Zine, Hiss Magazine, The Fader magazine, The Washington Post, 그리고 Ballpit Magazine 을 포함한 출판매체을 통해 작품을 소개하였다.
        <br><br>
        <a href="http://christinayunako.com/" target="_blank">http://christinayunako.com/</a>
    </p>
    <!-- -->
    <h1>
        cocoNreo
        <br>
        <small class="en" style="margin-top: 8px;">Seoul, South Korea</small>
        <small class="ko" style="margin-top: 8px;">대한민국, 서울</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        cocoNreo lives and works in Seoul as a graphic designer, and continues to produce their own work as an artist.
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        작가는 서울에서 그래픽 디자이너 활동하며, 개인 작품 활동을 하고 있다.
    </p>
    <!-- -->
    <h1>
        Jay Hollick
        <br>
        <small class="en" style="margin-top: 8px;">Denver, Colorado, USA</small>
        <small class="ko" style="margin-top: 8px;">미국, 덴버, 콜로라도</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Jay Hollick currently holds the position as Chair for the Illustrative Design Department at the Rocky Mountain College of Art + Design and is an established designer, illustrator, fabricator, and artist working professionally since 2007. Jay has worked nationally and abroad with groups such as the multidisciplinary art company Atelier van Lieshout in the Netherlands and the Contemporary Art Museum in Tampa, FL. Jay’s work has been shown internationally including the Atlantic Center for the Arts in New Smyrna Beach (2011), Czong Institute for Contemporary Art, South Korea (2018), and Washington State University (2008).
        <br><br>
        <a href="https://jayhollick.com/home.html" target="_blank">https://jayhollick.com/home.html</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        제이 홀릭은 현재 록키마운틴 예술대학 (Rocky Mountain College of Art + Design)에서 일러스트레이션 디자인과 학장으로 재직 중이며 2007년부터 전문적으로 활동하고 있는 디자이너, 일러스트레이터, 공예가 밑 아티스트이다. 네덜란드 멀티아트 컴퍼니 아틀리에 반 리슈트(Atelier van Lieshout), 플로리다주 템파 현대미술관 등 여러 국제 기관과 일해온 작가는 뉴스미르나비치 아틀란틱센터(2011년), 한국 CICA 미술관(2018년), 워싱턴 주립 대학교(2008년)등 다국에서 개최된 전시를 통해 국제적으로 작품을 선보이고 있다.
        <br><br>
        <a href="https://jayhollick.com/home.html" target="_blank">https://jayhollick.com/home.html</a>
    </p>
    <!-- -->
    <h1>
        Meryl Booth
        <br>
        <small class="en" style="margin-top: 8px;">South Africa</small>
        <small class="ko" style="margin-top: 8px;">남아프리카 공화국</small>
    </h1>
    <p class="en" style="margin-bottom: 96px;">
        Meryl Booth is an Illustrator from South Africa.
        <br><br>
        <a href="https://www.instagram.com/misuhmeh" target="_blank">https://www.instagram.com/misuhmeh</a>
    </p>
    <p class="ko" style="margin-bottom: 96px;">
        메릴 부스는 남아프리카 공화국 출신의 일러스트레이터이다.
        <br><br>
        <a href="https://www.instagram.com/misuhmeh" target="_blank">https://www.instagram.com/misuhmeh</a>
    </p>
    <!-- -->
    <h1 style="margin-bottom: 96px; line-height: 1;" class="emphasis">ROOM 3—MEMES</h1>
    <!-- -->
    <h1>
        Estrobomb
        <br>
        <small class="en" style="margin-top: 8px;">Berlin, Germany</small>
        <small class="ko" style="margin-top: 8px;">독일, 베를린</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Estrobomb is a writer, community organiser and maker based in Berlin. As a past member of the art collective The Omnishambles, they have created a diverse body of work encompassing fashion, sculpture, installation and visual art. Characterized by an aesthetic informed by their Scottish upbringing and Hakka ancestry, as well as queer culture and feminism, they continue to create work that dissects hierarchies inherent in contemporary art and postcolonial societies.
        <br><br>
        <a href="http://www.instagram.com/estrobomb" target="_blank">http://www.instagram.com/estrobomb</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        에스트로밤은 베를린을 중심으로 저술가, 지역사회 조직가 및 공예가로서 활동중이다. 아트 콜렉티브 ‘옴니샴블’의 구 멤버로 패션, 조각, 설치, 시각 예술을 넘나드는 다양한 작업을 계속하였다. 본인의 하카 혈통, 스코틀랜드에서의 성장기 및 퀴어문화와 페미니즘을 탐구하며 구축해온 작가의 작업은 현대 미술, 그리고 식민 후기 사회에 내재된 계층 구조를 분석한다.
        <br><br>
        <a href="http://www.instagram.com/estrobomb" target="_blank">http://www.instagram.com/estrobomb</a>
    </p>
    <!-- -->
    <h1>
        Gina Maree DeNaia
        <br>
        <small class="en" style="margin-top: 8px;">Seoul, South Korea</small>
        <small class="ko" style="margin-top: 8px;">대한민국, 서울</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Gina Maree DeNaia (b. 1984 in Newark, NJ) is an American visual artist who lives in Seoul, South Korea. She graduated from the School of Visual Arts in New York City with a BFA in Photography. Using still photography, video, animated gifs and text, she explores the nausea and alienation under the surface of everyday lived experience, fixating on the domestic sphere. Her work has been exhibited in group shows in New York, Chicago, The United Kingdom, The Netherlands, Tokyo and Seoul. Additionally, her work has been published in the Lacanian psychoanalytic journal Division/Review and has been featured on the cover of the literary magazine Antirrhinum Journal.
        <br><br>
        <a href="www.ginadenaia.com" target="_blank">www.ginadenaia.com</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        1984년 뉴저지주 뉴어크에서 출생한 디나이아 지나 마리는 서울에 거주하고 있는 시각 예술가이다. 뉴욕 시각예술대학(School of Visual Arts)에서 사진을 공부 후, 사진, 비디오, 애니메이션 및 텍스트를 사용하여 일상 생활에서 경험하는 메스꺼움과 소외감을 탐구한다. 뉴욕, 시카고, 영국, 네덜란드, 도쿄, 서울에서 열린 그룹 쇼에 작품을 전시하였으며, 라캉주의 정신분석학 저널 ‘Division/Review’ 및 문학 잡지’ Antirrhinum Journal’를 통해 작품이 소개된 바 있다.
        <br><br>
        <a href="www.ginadenaia.com" target="_blank">www.ginadenaia.com</a>
    </p>
    <!-- -->
    <h1>
        Kopano Maroga
        <br>
        <small class="en" style="margin-top: 8px;">Brussels, Belgium</small>
        <small class="ko" style="margin-top: 8px;">벨기에, 브뤼셀</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Kopano Maroga (they/them) is a performance artist, writer, cultural worker and co-founding director of the arts organization ANY BODY ZINE. They are currently living in Brussels, Belgium and working as a curator and guest-dramaturge at Kunstencentrum Vooruit in Ghent, Belgium. Their debut anthology of poetry, Jesus Thesis and Other Critical Fabulations, was released through uHlanga press in December of 2020. They very much believe in the power of love as a weapon of mass construction.
        <br><br>
        <a href="https://www.instagram.com/kopano.maroga" target="_blank">https://www.instagram.com/kopano.maroga</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        코파노 마로가(사용 대명사 they/them)은 퍼포먼스 아티스트, 작가, 문화 근로자 및 예술 단체 ANY BODY ZINE의 공동 창시자로 현재 벨기에 브뤼셀에 거주하며 벨기에 겐트의 쿤스텐센트룸 부루이트에서 큐레이터와 객원 드라마 제작자로 활동 중이다. 작가의 첫 시집 ‘예수 논문과 그외 빈판적 우화들’(Jesus Thesis and Other Critical Fabulations)은 2020년 12월 uHlanga 프레스를 통해 출판되었다. 작가는 ‘사랑의 힘을 대량구조의 무기로 믿는다’ 말한다.
        <br><br>
        <a href="https://www.instagram.com/kopano.maroga" target="_blank">https://www.instagram.com/kopano.maroga</a>
    </p>
    <!-- -->
    <h1>
        Mats Nesterov Andersen
        <br>
        <small class="en" style="margin-top: 8px;">Oslo, Norway</small>
        <small class="ko" style="margin-top: 8px;">노르웨이, 오슬로</small>
    </h1>
    <p class="en" style="margin-bottom: 96px;">
        Mr. Andersen is an artist currently residing in Norway. Mr. Andersen has in the short span of half a year made thousands of Positive Affirmations in his unique, signature style. Mr. Andersen has accumulated a huge fanbase on Social Media.
        <br><br>
        <a href="https://www.instagram.com/afffirmations" target="_blank">https://www.instagram.com/afffirmations</a>
    </p>
    <p class="ko" style="margin-bottom: 96px;">
        안데르센은 노르웨이 오슬로를 중심으로 활동중인 아티스트이다. 특유의 그래픽 스타일을 통해 반 년이라는 짧은 기간 동안 수천 번의 긍정적인 선언을 계속해온 작가는 소셜 미디어를 통해 큰 팬 층을 구축하였다.
        <br><br>
        <a href="https://www.instagram.com/afffirmations" target="_blank">https://www.instagram.com/afffirmations</a>
    </p>
    <!-- -->
    <h1 style="margin-bottom: 96px; line-height: 1;" class="emphasis">ROOM 4—ILLUSTRATIONS</h1>
    <!-- -->
    <h1>
        Avery Ota
        <br>
        <small class="en" style="margin-top: 8px;">Los Angeles, California, USA</small>
        <small class="ko" style="margin-top: 8px;">미국, 캘리포니아 주, 로스앤젤레스</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Avery Ota is a coffee and podcast-addicted Los Angeles based illustrator. She loves creating work that can inspire others, or simply bring a smile to someone’s face.
        <br><br>
        <a href="https://www.averyota.com/" target="_blank">https://www.averyota.com/</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        에이버리 오타는 커피와 팟캐스트에 중독된 로스앤젤레스 기반의 일러스트레이터이다. 그녀는 다른 사람들에게 영감을 주거나 누군가의 얼굴에 미소를 줄 수 있는 작업을 하는 것을 좋아한다.
        <br><br>
        <a href="https://www.averyota.com/" target="_blank">https://www.averyota.com/</a>
    </p>
    <!-- -->
    <h1>
        Meg O’Shea
        <br>
        <small class="en" style="margin-top: 8px;">Sydney, Australia</small>
        <small class="ko" style="margin-top: 8px;">시드니, 오스트레일리아</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Meg O'Shea is a Korean adoptee raised in Sydney, Australia. Despite having studied both animation and sculpture, her art practice consists mostly of comic making.
        <br><br>
        <a href="https://megoshea.com/" target="_blank">https://megoshea.com/</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        메그 오셰이는 호주 시드니에서 자란 한국인 입양아이다. 애니메이션과 조각을 공부하였지만 작가의 작업은 대부분 만화 포맷으로 이루어져 있다.
        <br><br>
        <a href="https://megoshea.com/" target="_blank">https://megoshea.com/</a>
    </p>
    <!-- -->
    <h1>
        Moon Jun Su
        <br>
        <small class="en" style="margin-top: 8px;">Seoul, South Korea</small>
        <small class="ko" style="margin-top: 8px;">대한민국, 서울</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Moon Jun Su draws, writes, and makes. He is fascinated by interesting things.
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        문준수는 그리고, 글쓰고, 만든다. 흥미로운 것들에 매료된다.    
    </p>
    <!-- -->
    <h1>
        Obsolater
        <br>
        <small class="en" style="margin-top: 8px;">Milan, Italy</small>
        <small class="ko" style="margin-top: 8px;">이탈리아, 밀라노</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Obsolater narrates the relationship between the digital realm and the organic, observing the shifting ideals of society in its liquid state, in a loop of existentialism in the digital era.
        <br><br>
        <a href="https://www.instagram.com/obsolater" target="_blank">https://www.instagram.com/obsolater</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        옵솔레이터(Obsolater)는 디지털 시대 실존주의의 고리에서 유동적인 상태의 변화하는 사회의 이상을 관찰하며 디지털 영역과 자연 사이의 관계를 설명한다.
        <br><br>
        <a href="https://www.instagram.com/obsolater" target="_blank">https://www.instagram.com/obsolater</a>
    </p>
    <!-- -->
    <h1>
        Sara Kim Ahn
        <br>
        <small class="en" style="margin-top: 8px;">Seoul, South Korea</small>
        <small class="ko" style="margin-top: 8px;">대한민국, 서울</small>
    </h1>
    <p class="en" style="margin-bottom: 96px;">
        Sara Kim Ahn is an illustrator and designer based in Seoul. Sometimes she draws soft-hearted monsters in technicolor.
        <br><br>
        <a href="https://www.instagram.com/sarakimahn" target="_blank">https://www.instagram.com/sarakimahn</a>
    </p>
    <p class="ko" style="margin-bottom: 96px;">
        세라 김 안은 서울에서 활동중인 일러스트레이터이자 디자이너이다. 종종 여린 마음을 가진 괴물들을 테크니컬러로 그린다.
        <br><br>
        <a href="https://www.instagram.com/sarakimahn" target="_blank">https://www.instagram.com/sarakimahn</a>
    </p>
    <!-- -->
    <h1 style="margin-bottom: 96px; line-height: 1;" class="emphasis">ROOM 5—MIXED MEDIA</h1>
    <!-- -->
    <h1>
        Allyce Wood
        <br>
        <small class="en" style="margin-top: 8px;">Seattle, Washington, USA</small>
        <small class="ko" style="margin-top: 8px;">미국, 워싱턴 주, 시애틀</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Visual artist Allyce Wood lives in Seattle where she works from her Georgetown studio. She received her MFA from Kunsthøgskolen i Oslo in 2018, BFA from Cornish College of the Arts in 2010, and has completed additional programs at the Glasgow School of Art and the University of Bergen. Wood creates work blending binary and textile processes to create unique, blended expressions.
        <br><br>
        <a href="https://allycewood.com" target="_blank">https://allycewood.com</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        앨리스 우드는 시애틀에 거주하며 조지타운 스튜디오에서 작업을 이어가는 시각 예술가이다. 그녀는 2018년에 오슬로 예술대학(Kunsthøgskolen i Oslo )에서 MFA를, 2010년에 시애틀 Cornish College of the Arts에서 BFA를 수료하였으며, 글래스고 예술대학 및 베르겐 대학교에서 추가 프로그램을 이수하였다. 작가는 디지털과 섬유공예를 혼합하는 작업을 통해 유니크한 조합의 시각적 표현을 자아낸다.
        <br><br>
        <a href="https://allycewood.com" target="_blank">https://allycewood.com</a>
    </p>
    <!-- -->
    <h1>
        Halo Lahnert
        <br>
        <small class="en" style="margin-top: 8px;">Taipei, Taiwan</small>
        <small class="ko" style="margin-top: 8px;">대만, 타이페이</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Halo Lahnert is an artist living and working in Taipei as a 2020/2021 Luce Scholar. Their work has been shown in the Hallie Ford Museum of Art, the American Mountaineering Museum, and Lighthouse Writer’s Workshop, among other places.
        <br><br>
        <a href="https://www.reinterpretation.org/" target="_blank">https://www.reinterpretation.org/</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        헤일로 레너트는 2020/2021년 Luce Scholar로 대만에서 활동 및 거주 중이며, Ford Museum of Art, the American Mountaineering Museum, and Lighthouse Writer’s Workshop을 비롯한 여러 공간에서 전시 하였다.
        <br><br>
        <a href="https://www.reinterpretation.org/" target="_blank">https://www.reinterpretation.org/</a>
    </p>
    <!-- -->
    <h1>
        Harmonie AUPETIT
        <br>
        <small class="en" style="margin-top: 8px;">Nanterre, France</small>
        <small class="ko" style="margin-top: 8px;">프랑스, 낭테르</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Harmonie Aupetit is a French artist, born in 1989 and living in Nanterre (FR). Some of her work mixes traditional hand embroidery and animation techniques that bring together digital and craft, so that the screen takes on a relief that leaves the viewer almost wanting to touch it. She is a self-taught artist, defining her approach and aesthetic as DIY – mixing different fields and mediums to produce hybrid work.
        <br><br>
        <a href="https://www.harmonieaupetit.com/" target="_blank">https://www.harmonieaupetit.com/</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        하모니 Aupetit은 1989년 낭테르 출생의 프랑스 작가이다. 주로 전통적인 손 자수와 애니메이션을 접목하는 작가의 작업은 공예와 디지털을 하나로 묶어 화면을 보는 이가 작품을 만지고 싶은 기분이 들게 한다. 예술을 독학한 작가는 수공예를 다른 매체와 혼합하여 작품을 제작한다.
        <br><br>
        <a href="https://www.harmonieaupetit.com/" target="_blank">https://www.harmonieaupetit.com/</a>
    </p>
    <!-- -->
    <h1>
        Youngmi Kim
        <br>
        <small class="en" style="margin-top: 8px;">Seoul, South Korea</small>
        <small class="ko" style="margin-top: 8px;">대한민국, 서울</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Youngmi strives to embody 'eternal love' in her work. Eternity is everything that exists around us, and it is the time spent actively creating and arranging those things in harmony. To capture eternity, Youngmi uses action painting to reveal the boundaries between unconsciousness and consciousness. She sometimes introduces sewing to represent how time is left to accumulate as intertwining threads continue to tell the colourful tales of life. Since Youngmi began her practice in 2006, her work has vacillated between abstract and figurative. It grows and changes every day - as does life, as do the relationships she forges. She is currently working on digitizing her existing works, which allows the past to be reproduced and reimagined in the present. It provides another language for expression, and serves as a link between herself and the ‘untact’ era.”    
        <br><br>
        <a href="http://www.artist1001.com" target="_blank">http://www.artist1001.com</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        김영미는 ‘영원한사랑' 을 작품안에 담아내고자 한다. 영원함이라는 것은 우리 주변에 존재하는 모든 것들이며 그 것을 조화롭게 창조해 내고 만들어내는 삶의 시간과 같다. 영원함을 담아 내기 위해 액션페인팅으로 부터 작업을 시작하여 무의식과 의식의 경계를 작품 안에 드러내고 때로는 얽히고 설키는 바느질을 하며 시간을 축적해 나가는 등, 다채로운 삶의 이야기를 이어나간다. 2006년부터 시작하였던 작품은 추상으로부터 구상과의 경계를 넘나들며, 때로는 뚜렷한 형상으로 본인의 삶이 한정되어 있지 않듯 매일 새롭게 변화하며 마주하는 관계들 안에 작품을 변화시켜 간다. 특히 2021년에 이르러서는 기존의 작품을 디지털화 하는 작업을 이어나간다. 이러한 작업은 과거의 시간을 현재안에 복제하고 또 다른 모습으로 창작하여 나가기 위한 작가 본인 삶의 또 다른 언어이자 언텍트 시대의 연결고리이다.    
        <br><br>
        <a href="http://www.artist1001.com" target="_blank">http://www.artist1001.com</a>
    </p>
    <!-- -->
    <h1>
        Robert Matejcek
        <br>
        <small class="en" style="margin-top: 8px;">La Junta, Colorado, USA</small>
        <small class="ko" style="margin-top: 8px;">미국, 콜로라도 주, 라 훈타 </small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Originally from North Dakota, Robert Matejcek obtained his BA in Art, Magna Cum Laude, from Fontbonne University in St. Louis, Missouri. Robert's work, a combination of traditional and new media, has been exhibited nationally and internationally. Robert and his wife, Anna, currently reside with their dogs, Willow and Indy, and their guinea pigs, Ivy, Honeysuckle, Poppy, and Zinnia, in La Junta, Colorado, USA.
        <br><br>
        <a href="https://www.robertmatejcek.com" target="_blank">https://www.robertmatejcek.com</a>
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        노스 다코타 출신인 로버트 마테치크는 미주리주 세인트 루이스 폰트본 대학에서 예술 학위를 수려하였다. 전통적인 매체와 현대 미디어를 혼합한 작가의 작업은 미국 내 및 국제적으로 전시되었다. 로버트와 아내 애나는 현재 콜로라도 주 라 훈타에서 반려견 윌로우와 인디, 그리고 기니피그 아이비, 허니서클, 포피, 지나와 함께 살고 있다.
        <br><br>
        <a href="https://www.robertmatejcek.com" target="_blank">https://www.robertmatejcek.com</a>
    </p>
    <!-- -->
    <h1>
        Sunny Park
        <br>
        <small class="en" style="margin-top: 8px;">Seoul, South Korea</small>
        <small class="ko" style="margin-top: 8px;">대한민국, 서울</small>
    </h1>
    <p class="en" style="margin-bottom: 48px;">
        Sunny Park is a multimedia artist who has been working with video art for the past few months. They aim to get deeper into video making and create trippy and abstract animation art for adults and children.
    </p>
    <p class="ko" style="margin-bottom: 48px;">
        써니 박은 지난 몇 달 동안 비디오 아트로 작업해 온 멀티미디어 아티스트이다. 비디오 아트를 계속해 가며 어른과 어린이들을 위한 몽롱하고 추상적인 애니메이션 아트를 만드는 것을 목표한다.
    </p>
    <!-- -->
</div>

<div class="menu-output-item" id="who-we-are">
    <h1 class="en emphasis" style="margin-bottom: 96px; line-height: 1;">CRAZY MULTIPLY</h1>
    <h1 class="ko emphasis" style="margin-bottom: 96px; line-height: 1;">크레이지 멀티플라이</h1>
    <!-- -->
    <p class="en">
        Crazy Multiply is a nomadic Seoul-based curatorial collective that promotes contemporary Korean and international artists.
    </p>
    <p class="en">
        <span class="indent"></span>Formed by a group of friends in 2012, Crazy Multiply was created to provide events that offered alternative spaces for artistic and creative endeavors for the greater Seoul community.
    </p>
    <p class="en" style="margin-bottom: 32px;">
        <span class="indent"></span>The name Crazy Multiply takes from the idea of constant growth and change and pursues its goals of promoting and supporting artists, creating unique experiences for viewers, and engaging with Seoul’s vibrant art community. Our events start conversations, build relationships between artists and spaces, and cultivate community engagement.
    </p>
    <!-- -->
    <p class="ko">
        크레이지멀티플라이(Crazy Multiply)는 현대 아티스트들을 홍보하는 다국적 서울 큐레이팅 콜렉티브 입니다.
    </p>
    <p class="ko">
        <span class="indent"></span>크레이지멀티플라이는 끊임없는 성장과 변화라는 아이디어에서 출발하여 아티스트 홍보 및 지원, 유니크한 기획과 서울의 활발한 아트 커뮤니티와의 교류를 추구합니다. 큐레이팅 하는 행사를 통해 대화의 장을 열고 아티스트와 교류공간의 관계를 구축하며 지역 사회 참여를 도모합니다.
    </p>
    <p class="ko" style="margin-bottom: 32px;">
        <span class="indent"></span>친구들이 마음을 모아 2012년 결성된 크레이지멀티플라이는 서울 커뮤니티 내에서의 예술적이고 창의적인 활동을 위한 대안공간을 제공하기 위해 시작되었습니다.
    </p>
    <!-- -->
    <p class="common" style="margin-bottom: 48px;">
        <a href="https://crazymultiply.com/" target="_blank">www.crazymultiply.com</a>
    </p>
</div>`;