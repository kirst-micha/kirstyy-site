export default function Mountains() {
  return (
    <body>
      <main>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "2rem 1rem" }}>
          <header>
            <h1 style={{ fontSize: "2.5rem" }}><b>Mountains Hiked</b></h1>
          </header>

          <section>
            <p style={{ fontSize: "1.25rem" }}><em>A collection of mountains we&apos;ve hiked.</em></p>
          </section>

          <br></br>
          <section>
          <ul>
            <li>
                <h4 style={{ fontSize: "1.25rem" }}><b>Mt. Kabunian - Bakun, Benguet (1789+ MASL)</b></h4>
                <p>- We hiked Kabunian, on February 7, 2026</p>
                <br></br>
                <img src="https://highlandreflections.com/wp-content/uploads/2023/12/pxl_20231208_231711746.jpg" alt="Mt. Kabunian" width={400} height={150} style={{ border: "3px solid #ccc" }}/>

            </li>
                <br></br>
            <li>
                <h4 style={{ fontSize: "1.25rem" }}><b>Mt. Ulap - Itogon, Benguet (1,846 MASL)</b></h4>
                <p>- We hiked Ulap, on March 21,2026</p>
                <br></br>
                <img src="https://static.wixstatic.com/media/c822ed_0f48f220e5374701a0c3aab6e02da4ac~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85/c822ed_0f48f220e5374701a0c3aab6e02da4ac~mv2.jpg" alt="Mt. Ulap" width={400} height={150} style={{ border: "3px solid #ccc" }} />
            </li>
                <br></br>
            <li>
                <h4 style={{ fontSize: "1.25rem" }}><b>Mt. Batur - Bali, Indonesia (1,717 MASL)</b></h4>
                <p>- Instead of hiking, we did an Jeep tour on Batur at April 9, 2026</p>
                <br></br>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b8/12/7b/gunung-batur.jpg?w=1000&h=-1&s=1" alt="Mt. Batur" width={400} height={150} />
            </li>
                <br></br>
            <li>
                <h4 style={{ fontSize: "1.25rem" }}><b>Mt. Makiling - UP Las Baños (1,090 MASL)</b></h4>
                <p>- We hiked Makiling, on May 9, 2026</p>
                <br></br>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/9d/dc/66/near-the-summit.jpg?w=1000&h=-1&s=1" alt="Mt. Makiling" width={400} height={150} />
            </li>
          </ul>
         </section>
        </div>
      </main>
    </body>
  );
}