// http://hyoungwon-eng.co.kr/business/sub04.php?tname=business&page=1&key=&keystring= 
// 위 url에서 데이터를 가져옴

const businessResult = [
        {
          year: "2023년",
          company: "엘지디스플레이(주)",
          location: "파주",
          description: "파주소방기계공사-M2동 GA 중형 OLED 개발품질대응 소방기계 공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2023년",
          company: "엘지디스플레이(주)",
          location: "파주",
          description: "파주소방설비공사 - P10 B2F 품질경영센터 실험실 구축 소방설비공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2023년",
          company: "엘지디스플레이(주)",
          location: "파주",
          description: "파주소방기계공사-M2 A07 신뢰성 시험 Infra대응 소방기계공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2022년",
          company: "엘지디스플레이(주)",
          location: "파주",
          description: "파주소방설비공사 - P10 C/R7F A07 대응 소방공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2022년",
          company: "자이씨앤에이(주)",
          location: "파주",
          description: "LGD 파주 P10 CR7층 CR&UT공사 UT일반배관공사\"P10 CR7F",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2022년",
          company: "자이씨앤에이(주)",
          location: "파주",
          description: "LGD 파주 P10 CR7층 CR&UT공사 고순도배관(N2/CDA)공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2022년",
          company: "자이씨앤에이(주)",
          location: "파주",
          description: "LGD 파주 P9 ToE CR&UT공사 P-GAS(M2 분석실 Infra)",
          category: "P-GAS/Chemical",
          etc: ""
        },
        {
          year: "2022년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "LGD 파주 P9 TOE CR&UT공사 소방기계공사-6",
          category: "소방",
          etc: ""
        },
        {
          year: "2022년",
          company: "엘지디스플레이(주)",
          location: "파주",
          description: "M2동 2F 분석실 INFRA 대응 소방기계공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2022년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "LGD 파주 P9 TOE CR&UT공사 소방기계공사-5",
          category: "소방",
          etc: ""
        },
        {
          year: "2022년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "LGD 파주 P9 TOE CR&UT공사 소방기계공사-8",
          category: "소방",
          etc: ""
        },
        {
          year: "2022년",
          company: "엘지디스플레이(주)",
          location: "파주",
          description: "M2동 중형 OLED 시험 INFRA 대응 소방기계공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2022년",
          company: "엘지디스플레이(주)",
          location: "파주",
          description: "P78 DI 염산 저장소 신축 소방 설비 공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "P10 중소형 OLED 15K Infra 구축 투자_P-GAS/CHEMICAL",
          category: "P-GAS/ Chemical",
          etc: ""
        },
        {
          year: "2021년",
          company: "자이씨앤에이(주)",
          location: "베트남",
          description: "H2 2F SW 22년 LTF 6LINE CR & UT PORJECT",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2021년",
          company: "자이씨앤에이(주)",
          location: "베트남",
          description: "NY Sphon D85x 2nd CR & UT PROJECT",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "P9 Mobile PO확장 대응 공사_P-GAS/CHEMICAL",
          category: "P-GAS/ Chemical",
          etc: ""
        },
        {
          year: "2021년",
          company: "엘지디스플레이(주)",
          location: "파주",
          description: "P10 C/R6F IT OLED 대응 소방 설비 공사(OT)",
          category: "소방",
          etc: ""
        },
        {
          year: "2021년",
          company: "엘지디스플레이(주)",
          location: "파주",
          description: "P9 Mobile PO확장 대응 소방 설비 공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "오창",
          description: "LGES 오창 2공장 시험연구동 신축공사 기계설비공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "청주",
          description: "화학(생명과학) 청주 오송공장4단계 UT설비공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "LGD파주 P9 TOE CR&UT공사 P-GAS/Chemical(Mobile PO)",
          category: "P-GAS/ Chemical",
          etc: ""
        },
        {
          year: "2021년",
          company: "신화인터텍㈜",
          location: "천안",
          description: "크린부스 설치공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "청주",
          description: "화학(생명과학) 청주 오송공장 4단계 기계설비공사(BIO PILOT,공동구)",
          category: "일반",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "LGD파주 P9 TOE CR&UT 공사 N2-CDA고순도배관(TOE 30K)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "LGD파주 P9 TOE CR&UT공사 P-GAS, Chemical배관공사(TOE 30K대응)",
          category: "P-GAS/ Chemical",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "LGD파주 P9 TOE CR&UT 공사 N2-CDA고순도배관(MTO증량)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2021년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "LGD파주 P9 TOE CR&UT공사 P-GAS, Chemical배관공사(MTO 증량대응)",
          category: "P-GAS/ Chemical",
          etc: ""
        },
        {
          year: "2020년",
          company: "S&I코퍼레이션",
          location: "구미",
          description: "LGD구미 Capa-up공사(M3 Cell 후공정 투자대응UT_설비공사)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2020년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "LGD 파주 P9 TOE CR&UT공사 LGD파주 P9E63 CR&UT(P-GAS, Chemical)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2020년",
          company: "S&I코퍼레이션",
          location: "평택",
          description: "생활건강CCB평택 진위2산단 통합물류센터 신축공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2020년",
          company: "S&I코퍼레이션",
          location: "인천",
          description: "LEG인천 캠퍼스 복합동3층 마감공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2020년",
          company: "GS건설",
          location: "원주",
          description: "LG H&H 원주통합물류센터 소방 보수공사",
          category: "소방",
          etc: ""
        },
        {
          year: "2019년",
          company: "GS건설",
          location: "청주",
          description: "LG생활건강청주TP Project(충북)",
          category: "소방",
          etc: ""
        },
        {
          year: "2019년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "P9-Project(경기)LGD 파주 ToE CR&UT공사(P-Gas,Chemical배관공사]",
          category: "P-GAS/Chemical",
          etc: ""
        },
        {
          year: "2019년",
          company: "S&I코퍼레이션",
          location: "파주",
          description: "P9-Project(경기)LGD 파주 ToE CR&UT공사(UT일반배관공사)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2019년",
          company: "S&I코퍼레이션",
          location: "부여",
          description: "생활건강 태극제약 부여공장 신축공사(기계설비공사/2)",
          category: "덕트",
          etc: ""
        },
        {
          year: "2019년",
          company: "S&I코퍼레이션&GS건설",
          location: "베트남",
          description: "LGD Vietnam DP116 & E5 5TH Project기계공사",
          category: "UTILITY",
          etc: "해외 공사"
        },
        {
          year: "2018년",
          company: "S&I코퍼레이션&GS건설",
          location: "베트남",
          description: "LGD 하이퐁 H2 E62 Utility 배관공사",
          category: "UTILITY",
          etc: "해외 공사"
        },
        {
          year: "2018년",
          company: "S&I코퍼레이션",
          location: "인천",
          description: "LGE 인천캠퍼스 복합동 증축공사(소방기계공사/2)",
          category: "소방",
          etc: ""
        },
        {
          year: "2018년",
          company: "S&I코퍼레이션",
          location: "부여",
          description: "생활건강 태극제약 부여공장 신축공사(소방기계공사)",
          category: "소방",
          etc: ""
        },
        {
          year: "2018년",
          company: "GS건설/ S&I코퍼레이션",
          location: "파주",
          description: "P9-Project(경기) C/R설비 (물동대응 CPS&MMG)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2018년",
          company: "GS건설/S&I코퍼레이션",
          location: "파주",
          description: "P9-Project(경기) C/R설비 (물동대응 CPS&MMG)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2018년",
          company: "서브원",
          location: "인천",
          description: "LGE 인천캠퍼스 복합동 2,3층 증축공사(소방기계공사)",
          category: "소방",
          etc: ""
        },
        {
          year: "2018년",
          company: "GS건설",
          location: "파주",
          description: "LGD 파주P8 Capa-up C/R & Utility C/R설비 [P-GAS]",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2018년",
          company: "GS건설",
          location: "파주",
          description: "LGD 파주P8 Capa-up C/R & Utility C/R설비",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2018년",
          company: "GS건설/서브원",
          location: "파주",
          description: "P9-Project(경기) C/R설비 (P9 Rollable(1F) (P-GAS)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2018년",
          company: "GS건설/서브원",
          location: "파주",
          description: "P9-Project(경기) C/R설비 (P9 Rollable(1F)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "GS건설/서브원",
          location: "파주",
          description: "LGD 파주P8 Capa-up C/R & Utility C/R설비 [ AP2 Redesign[P-GAS]",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "GS건설/서브원",
          location: "파주",
          description: "LGD 파주P8 Capa-up C/R & Utility C/R설비 [ AP2 RedesignF]",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "GS건설/서브원",
          location: "파주",
          description: "P10-Proj. N2.CDA,Purge Gas공사 [P10 고순도]",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "서브원",
          location: "구미",
          description: "LGD 구미 CR&UT공사 (UT Hook-up공사/13)-M4 PO AUTO",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "서브원",
          location: "구미",
          description: "LGD 구미 CR&UT공사 (UT Hook-up공사/12)-P62 49인치",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "서브원",
          location: "인천",
          description: "LGE 인천캠퍼스 복합동 증축공사(소방기계공사)",
          category: "소방",
          etc: ""
        },
        {
          year: "2017년",
          company: "GS건설/서브원",
          location: "파주",
          description: "P9 CR & UT공사 (CR2F A-SI(배기))",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "GS건설/서브원",
          location: "파주",
          description: "P9 CR & UT공사 (CR2F A-SI)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "GS건설/서브원",
          location: "파주",
          description: "P9 CR & UT공사 (CR2F 고해상도)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "GS건설/서브원",
          location: "파주",
          description: "P9 CR & UT공사 (pOC-5층 고순도 Utility 공사)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "GS건설/서브원",
          location: "파주",
          description: "P9 CR & UT공사 ( pOC-5층 일반설비공사)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2017년",
          company: "서브원",
          location: "구미",
          description: "LGD CR & UT공사 (UT HOOK-UP공사/11)-SAMPLING LINE",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2016년",
          company: "서브원",
          location: "구미",
          description: "LGD CR & UT공사 (UT HOOK-UP공사/10)-QHD공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2016년",
          company: "서브원",
          location: "구미",
          description: "LGS 구미3공장 안전환경개선 설계용역(플랜트 설계)",
          category: "설계",
          etc: ""
        },
        {
          year: "2016년",
          company: "GS건설/서브원",
          location: "파주",
          description: "P9-Project(경기) C/R설비",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2016년",
          company: "서브원",
          location: "구미",
          description: "LGD 구미 CR & UT공사 (UT Hook-up공사/9)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2016년",
          company: "서브원",
          location: "구미",
          description: "LGD 구미 CR & UT공사 (UT Hook-up공사/7)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2016년",
          company: "GS건설/서브원",
          location: "파주",
          description: "LG Display M2-Project(경기) (C/R 설비)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2016년",
          company: "서브원",
          location: "평택",
          description: "LGE 칠러공장 신축공사(기계설비공사)",
          category: "일반",
          etc: ""
        },
        {
          year: "2015년",
          company: "GS건설",
          location: "구미",
          description: "LG Display 모듈동 신축공사 (경북) (C/R설비)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2015년",
          company: "서브원",
          location: "구미",
          description: "LGD 구미 소규모공사(2차-UT Hook-up공사/3)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2015년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG 이노텍 2공장P4동 약품이중배관 및 Leak Sensor 공사계약",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2015년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 TS 2-Metal COF用 약품탱크 및 이중배관공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2015년",
          company: "GS건설",
          location: "구미",
          description: "LG Display 구미공장 C/R & Utility 공사 (C/R 설비)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2015년",
          company: "GS건설/서브원",
          location: "파주",
          description: "LG Display M2-Project(경기) (C/R 설비)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2015년",
          company: "서브원",
          location: "구미",
          description: "LGD 구미 소규모공사(2차-UT Hook-up공사/2)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2014년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 3공장 TS약조실 방류벽 및 이중배관공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2014년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 1공장 G2동 PKG증설2차(환경)(CR설비공사)",
          category: "환경.UTILITY",
          etc: ""
        },
        {
          year: "2014년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 공장 TW약품 이중배관 공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2014년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 1공장 PKG 확장배관공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2014년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 구미 2공장 TW 약품개선공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2014년",
          company: "LG 실트론",
          location: "구미",
          description: "LG실트론 환경안전개선 설계용역 (배관/GAS/CCSS)",
          category: "설계",
          etc: ""
        },
        {
          year: "2014년",
          company: "LG도요엔지니어링",
          location: "파주",
          description: "LG Display M2 후공정 & 초대형 Line 대응 UTILITY 설계용역",
          category: "설계",
          etc: ""
        },
        {
          year: "2014년",
          company: "LG도요엔지니어링",
          location: "구미",
          description: "LG Display D150 Golden Line 대응 UTILITY 설계용역",
          category: "설계",
          etc: ""
        },
        {
          year: "2013년",
          company: "GS건설",
          location: "구미",
          description: "LG Display 구미공장 C/R & Utility 공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2013년",
          company: "GS건설",
          location: "구미",
          description: "LG Display C/R설비(고순도배관)(P1 철거)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2013년",
          company: "서브원",
          location: "구미",
          description: "LG이노텍 G2동 PLK증설(환경)(UT 설비공사)",
          category: "환경.UTILITY",
          etc: ""
        },
        {
          year: "2013년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 2,3공장 PSM 대응현장 개선공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2013년",
          company: "GS건설/서브원",
          location: "파주",
          description: "LG Display M2-PROJECT(경기) C/R설비(UT배관공사)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2013년",
          company: "GS건설/서브원",
          location: "파주",
          description: "LG Display M2-PROJECT(경기) C/R설비 (고순도 BLUK GAS, SUPPORT) 공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2012년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 1공장 G2동 수직화학동 CHEMICAL 배관공사",
          category: "환경.UTILITY",
          etc: ""
        },
        {
          year: "2012년",
          company: "하이닉스",
          location: "이천",
          description: "이천 하이닉스반도체 M7B 배관공사 설계지원",
          category: "설계",
          etc: ""
        },
        {
          year: "2012년",
          company: "GS건설",
          location: "구미",
          description: "구미 LG Display 환경설비공사(폐수, 불산)",
          category: "환경",
          etc: ""
        },
        {
          year: "2012년",
          company: "GS건설",
          location: "구미",
          description: "구미 LG Display 구미공장 C/R & Utility 공사 (PCW, VACUUM)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2012년",
          company: "GS건설",
          location: "구미",
          description: "LG Display 구미공장 C/R & Utility 공사 (고순도 CDA, N2)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2012년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 1공장 환경동 STEAM 배관 교체공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2012년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 1층 수평 화학동 HOOK-UP 공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2011년",
          company: "서브원",
          location: "구미",
          description: "LG이노텍 1공장 OS사업 환경 (UT공사)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2011년",
          company: "서브원",
          location: "구미",
          description: "LG Display P23 OXIDE SEED 대응 건설 UT공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2011년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 G1동 화장실 배기 덕트 공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2011년",
          company: "LG Display",
          location: "구미",
          description: "LG Display M동 휨측정기 UT공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2011년",
          company: "서브원",
          location: "구미",
          description: "LG이노텍 1공장 G4동 C/M 증설 공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2011년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 1공장 최종경화 UT공사",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2011년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 1공장 G2동 노광 장비 이설공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2011년",
          company: "LG 이노텍",
          location: "구미",
          description: "LG이노텍 1공장 S동 생산 장비 이설공사",
          category: "일반",
          etc: ""
        },
        {
          year: "2011년",
          company: "LG전자",
          location: "구미",
          description: "LG전자 A1공장 L1,L2 라인 UT 배관공사 (CDA)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2011년",
          company: "GS건설",
          location: "구미",
          description: "LG Display 모듈동 C/R 고순도배관공사 (CDA, N2)",
          category: "UTILITY",
          etc: ""
        },
        {
          year: "2011년",
          company: "GS건설",
          location: "구미",
          description: "LG Display M5 폐수환경설비공사",
          category: "환경",
          etc: ""
        }
];

export const useBusinessResult = () => {
   return businessResult;
}
