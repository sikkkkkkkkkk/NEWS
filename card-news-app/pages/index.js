import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import Card from "../components/Card";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Home = () => {
  const cardData = [
    {
      title: "The Road Ahead",
      date: "September 25, 2015",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "From Top Down",
      date: "September 25, 2015",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "New Horizons",
      date: "September 25, 2015",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Future Insights",
      date: "September 25, 2015",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Market Trends",
      date: "September 25, 2015",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Head>
        <title>카드뉴스 웹앱</title>
      </Head>
      <div
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2019/10/21/12/01/newspapers-4565916_1280.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "black", // 전체 글자 색상 변경
          padding: "20px",
          position: "relative",
        }}
      >
        <h1 style={{ fontSize: "7em", color: "white" }}>NEWSROOM</h1>
        <h2 style={{ color: "white" }}>
          Captivating Chronicles: Journey with Us Through Global Stories
        </h2>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffcc00",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          주가 예측
        </button>
      </div>
      <h3 style={{ textAlign: "center", margin: "40px 0", color: "white" }}>
        Featured Posts
      </h3>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
