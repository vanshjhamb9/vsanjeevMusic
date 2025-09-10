import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  padding: 3rem 0;
  border-bottom: 2px solid #333;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #FFE395;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #FFE395;
`;

const Subtitlet = styled.h2`
  font-size: 1.9rem;
  margin-bottom: 1rem;
  color: #FFE395;
`;

const CategoryList = styled.div`
  font-size: 2rem;
  line-height: 1.6;
  color: #ffffff;
`;

const FlexRowSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; // Wraps content on smaller screens
  padding: 2rem 0;
  gap: 1rem;
`;

const AlignedButton = styled.a`
  background: #E6A800; // golden yellow
  color: #000;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  border: 2px solid #ccc;
  transition: all 0.3s ease;

  &:hover {
    background: #FFD700;
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;  // Horizontally centers the image
  align-items: center;      // Vertically centers the image
  margin: 3rem 0;
`;

const MainImage = styled.img`
  max-width: 70%;
  height: auto;
  border-radius: 10px;
  margin: 1rem 0;
`;

const MainImage2 = styled.img`
  max-width: 40%;
  height: auto;
  border-radius: 10px;
  margin: 1rem 0;
`;

const FinalParagraph = styled.p`
  font-size: 1.4rem;
  color: #ffffff;
  font-style: italic;
  text-align: center;
  line-height: 1.8;
  max-width: 900px;
  margin: 2rem auto;
`;

const SectionHeading = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: #FFE395;
  margin-top: 3rem;
  font-weight: bold;
`;


const VideoSection = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: #111111;
  border-radius: 10px;
`;

const WingsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  background: #000;
  padding: 2rem 1rem;
  border-radius: 10px;
  margin: 3rem 0;
`;

const WingsImage = styled.img`
  width: 100%;
  max-width: 450px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 227, 149, 0.3);
`;

const WingsContent = styled.div`
  flex: 1;
  min-width: 300px;
  color: #fff;
  font-size: 1rem;
  line-height: 1.7;
  max-width: 600px;
`;

const WingsTitle = styled.h2`
  color: #FFE395;
  font-family: 'Cursive', 'Inter', sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const WingsButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const WingsButton = styled.a`
  background: #FFE395;
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid #FFE395;

  &:hover {
    background: #fff;
    transform: translateY(-2px);
  }
`;




const VideoEmbed = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin: 2rem 0;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const DescriptionSection = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center;
`;

const LinksSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

const StreamingButton = styled.a`
  background: #FFE395;
  color: #000000;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ffffff;
    transform: translateY(-2px);
  }
`;

const ArtistSection = styled.section`
  background: #000;
  color: #fff;
  padding: 3rem 2rem;
`;

const ArtistTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: #ffe395;
  margin-bottom: 3rem;
`;

const ArtistBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: flex-start;
  }
`;


const Section = styled.div`
  background-color: #000;
  color: #fff;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

const ArtistImage = styled.img`
  width: 100%;
  max-width: 450px;
  border-radius: 6px;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  max-width: 700px;
  padding:2rem;
`;

const ArtistName = styled.h4`
  color: #ffe395;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const ArtistBio = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  
`;

const Highlights = styled.div`
  font-size: 0.95rem;

  strong {
    color: #ffe395;
  }

  ul {
    margin-top: 0.5rem;
    list-style-type: disc;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.6rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialButton = styled.a`
  background: #d4af37; /* gold */
  color: #000;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #000;
    color: #d4af37;
    border: 1px solid #d4af37;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px 10px;
  border-top: 1px solid #d4af37;
  margin-top: 30px;
  color: #fff;
  font-size: 14px;
  background: #000;

  p {
    margin: 6px 0;
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 12px;
    color: #aaa;
  }
`;

const FycGrammy = () => {
  return (
    <Container>
      <Header>
        <Title>For Your GRAMMY® Consideration</Title>
        <Subtitlet className="text-[2.3rem]" >Global Music Performance</Subtitlet>
        <Subtitle>Music Video</Subtitle>
        <CategoryList>
          Arrangement, Instrumental or A Cappella<br/>
          Instrumental Composition
        </CategoryList>
      </Header>

      <ImageContainer>
        <MainImage 
          src="https://files.constantcontact.com/f21a56a9801/89bb2a0b-68cb-49a7-921e-7c21bad34545.jpg?rdr=true" 
          alt="Wings of Gold Album Cover"
        />
      </ImageContainer>

       <Header>
      <Subtitlet className="text-[2.3rem]" >A SYMPHONIC THILLANA IN HAMIR KALYANI</Subtitlet>
       </Header>

      <ImageContainer>
        <MainImage 
          src="https://files.constantcontact.com/f21a56a9801/a4b762fe-f2fb-47c8-a471-8fe1dcb727ca.jpg?rdr=true" 
          alt="Sanjeev"
        />
      </ImageContainer>

      <VideoSection>
        
        <VideoEmbed>
          <iframe 
            src="https://www.youtube.com/embed/MrXcluZWJbU" 
            title="Wings of Gold - A Symphonic Thillana in Hamir Kalyani"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </VideoEmbed>
      </VideoSection>

      <FlexRowSection>
  <MainImage2 
    src="https://files.constantcontact.com/f21a56a9801/89bb2a0b-68cb-49a7-921e-7c21bad34545.jpg?rdr=true" 
    alt="Wings of Gold Album Cover"
  />

  <AlignedButton 
    href="https://www.youtube.com/watch?v=MrXcluZWJbU" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Watch on YouTube
  </AlignedButton>
</FlexRowSection>


      <WingsSection>
      
  <div>
    <WingsImage 
      src="https://files.constantcontact.com/f21a56a9801/4e953942-ceed-4c5e-a5b8-1a4eebe3f6d4.jpg?rdr=true" 
      alt="Wings of Gold Cover"
    />
  </div>
  
  <WingsContent>
    <p>
      —a groundbreaking musical experience where the grandeur of symphonic orchestration meets the timeless beauty of Carnatic music.
      <br/><br/>
      This Thillana is unlike any other. Traditionally composed for dance, it takes on a new dimension in this unique interpretation—set against breathtaking visuals of birds in motion. From the tranquil waters of Bharatpur to stunning landscapes across India, witness nature’s rhythm come alive through the soaring, gliding, and fishing movements of birds, perfectly synchronized with the music.
      <br/><br/>
      The music was <strong>recorded live in Valencia, Spain</strong>, with a world-class symphony orchestra, bringing depth and richness to this Carnatic gem. Every note and every orchestral layer elevates the essence of the raga, reimagining its beauty on an epic scale.
    </p>
  </WingsContent>

</WingsSection>



<LinksSection>
  <StreamingButton 
    href="https://open.spotify.com/track/7GPlfQKf2AtHc66o2Ekvut?si=1af1646b01a54f30" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Listen on Spotify
  </StreamingButton>
  <StreamingButton 
    href="https://music.apple.com/gb/song/wings-of-gold-a-symphonic-thillana-in-hamir/1802546557" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Listen on Apple Music
  </StreamingButton>
</LinksSection>

<FinalParagraph>
  More than just a musical piece, this Symphonic Thillana is an immersive experience—a celebration of nature, melody, and visual storytelling.
  <br/>
  Let the harmony of birds and music transport you to a world where tradition and innovation merge seamlessly.
</FinalParagraph>

<SectionHeading>Featured Artists on Wings of Gold</SectionHeading>


      <ArtistSection>
      

      {/* Sanjeev */}
      <ArtistBlock>
        <ArtistImage
          src="https://files.constantcontact.com/f21a56a9801/6b390ddd-40a8-4008-af60-e7f6d48f45af.jpg?rdr=true"
          alt="Sanjeev Venkataramanan"
        />
        <Content>
          <ArtistName>Sanjeev Venkataramanan</ArtistName>
          <ArtistBio>
            Sanjeev Venkataramanan is a Chennai-based violinist–composer and orchestral 
            arranger and a <strong>Recording Academy Voting Member</strong>, whose work 
            builds a modern instrumental repertoire for Carnatic music. In{" "}
            <strong>Wings of Gold</strong>, he reimagines the Thillana for full symphony 
            orchestra weaving precise raga grammar with cinematic orchestration. 
            The music is paired with a nature-led visual narrative (birds in motion across India), 
            shaping an immersive experience where tradition and symphonic scale meet.
          </ArtistBio>
          <Highlights>
            <strong>Recent Recognition (highlights):</strong>
            <ul>
              <li>
                InterContinental Music Awards 2025 — <strong>Winner (World Music)</strong> for <i>Wings of Gold</i>
              </li>
              <li>
                Global Music Awards 2025 — <strong>Bronze Medal</strong> (Music Video, Composition, Entertainment Value) for <i>Wings of Gold</i>
              </li>
              <li>
                Multiple international honors for the earlier project <i>Lost in Harmony</i> (Original Score/Best Musical/Best Score)
              </li>
            </ul>
          </Highlights>
        </Content>
      </ArtistBlock>

      {/* Navin */}
      <ArtistBlock reverse>
        <ArtistImage
          src="https://files.constantcontact.com/f21a56a9801/0348abc2-7c21-4bab-aae6-244017c1a687.jpg?rdr=true"
          alt="Navin Chandar Sekhar"
          reverse
        />
        <Content>
          <ArtistName>Featured Artist – Navin Chandar Sekhar</ArtistName>
          <ArtistBio>
            Flute Navin (Navin Chandar Sekhar) — <strong>Featured Artist (Flute)</strong> on{" "}
            <i>Wings of Gold – A Symphonic Thillana in Hamir Kalyani</i> — is an internationally acclaimed 
            flautist, composer, and a <strong>Recording Academy™ voting member</strong>. 
            He performed on the soundtrack of the Oscar-winning film <strong>Slumdog Millionaire</strong> with A.R. Rahman 
            and has collaborated with Germany's prestigious <strong>Babelsberg Orchestra</strong>. 
            A featured artist with <strong>EarthSync</strong>, Navin has appeared on major stages worldwide, 
            including the <strong>Perth International Arts Festival</strong>, and toured globally with Rahman. 
            Navin Chandar Sekhar's album <strong>The London Bridge Sessions</strong> was submitted for GRAMMY® consideration, 
            reflecting his global vision. As a music director, he has scored films such as <i>Kalyana Samayal Saadham</i>, 
            <i> Peruchazhi</i>, and <i>Vil Ambu</i>. On <i>Wings of Gold</i>, Navin's lyrical tone and agile improvisation 
            illuminate the raga’s flight motifs.
          </ArtistBio>
        </Content>
      </ArtistBlock>

      {/* Akshay */}
      <ArtistBlock>
        <ArtistImage
          src="https://files.constantcontact.com/f21a56a9801/7c3b94ca-0a5d-4924-b06a-f8d89999c896.jpg?rdr=true"
          alt="Akshay Ananthapadmanabhan"
        />
        <Content>
          <ArtistName>Featured Artist – Akshay Ananthapadmanabhan</ArtistName>
          <ArtistBio>
            Akshay Anantapadmanabhan — <strong>Featured Percussionist (Mridangam)</strong> on{" "}
            <i>Wings of Gold – A Symphonic Thillana in Hamir Kalyani</i> — is a leading Indian percussionist, composer, 
            educator, and mridangam innovator, honored with the <strong>Sangeet Natak Akademi Yuva Puraskar</strong>. 
            A key contributor to boundary-pushing projects like <strong>Carnatic 2.0</strong> and{" "}
            <strong>The Thayir Sadam Project</strong>, he brings classical depth and contemporary edge to modern soundscapes. 
            Akshay has collaborated with GRAMMY®-nominated artists, performed at <strong>Burning Man</strong>, and toured globally 
            across major festivals, bridging tradition and innovation through rhythm, tone, and dynamic ensemble interplay. 
            His playing anchors the work's rhythmic architecture and propels its symphonic energy with precision and warmth.
          </ArtistBio>
        </Content>
      </ArtistBlock>

      {/* Jacopo */}
      <ArtistBlock reverse>
        <ArtistImage
          src="https://files.constantcontact.com/f21a56a9801/b64e5423-474f-4bf2-8dec-d77499ac4c2f.jpg?rdr=true"
          alt="Jacopo Mezanotti"
          reverse
        />
        <Content>
          <ArtistName>Featured Artist – Jacopo Mezanotti</ArtistName>
          <ArtistBio>
            Jacopo Mezzanotti — <strong>Conductor (Valencia session)</strong> — is a Valencia-based guitarist, composer, and producer; 
            Editor-in-Chief (Didactics) at <i>Cutaway Guitar Magazine</i> and Teaching Assistant for Berklee's online guitar MOOC. 
            Endorsed by <strong>Guitarras Raimundo</strong> and collaborating with <strong>Aclam Guitars</strong>, he has worked 
            with Uruguay's <strong>OSSODRE</strong> and performed with the <strong>Orquesta Sinfónica de España</strong> at Palau de la Música. 
            He conducted the Valencia session for <i>Wings of Gold</i> and is a featured artist in this single.
          </ArtistBio>
        </Content>
      </ArtistBlock>
    </ArtistSection>


       <SocialLinks>
        <SocialButton 
          href="https://www.vsanjeevmusic.com/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Official Website
        </SocialButton>
        <SocialButton 
          href="https://www.facebook.com/sanjeev.venkataramanan/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Facebook
        </SocialButton>
        <SocialButton 
          href="https://www.instagram.com/sanvenk" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Instagram
        </SocialButton>
        <SocialButton href="mailto:sanvenk@gmail.com">
          Contact Voting Member
        </SocialButton>
      </SocialLinks>

      <Footer>
        <p>2025© All Rights Reserved</p>
        <span>
          FYC by MoPromo | has no influence on connection to or affiliation 
          with the GRAMMY® or The Recording Academy™
        </span>
      </Footer>
    </Container>
  );
};

export default FycGrammy;