import Image from "next/image";


export default function Main() {
  return (
    <body>
      <section className="hero-container">
        <div className="hero-content">
          <div>
            
          <h1>Hello! My name is <span className="text-red-800">Aqsa Iqbal</span></h1>
          <p>
           🚀 I&apos;m a Passionate Web Developer with expertise in HTML, CSS, JavaScript, TypeScript, Tailwind CSS & Next.js  I am dedicated to creating Responsive and visually appealing web applications. 💻✨
          </p>
          </div>
     <div className="img-box">
          <Image src="/dp.jpg" alt="Img" width={500} height={500} className="img" />
          </div>
        </div>
      </section>
    </body>
  );
}