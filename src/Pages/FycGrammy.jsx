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
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #FFE395;
`;

const CategoryList = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ffffff;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const MainImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 1rem 0;
`;

const VideoSection = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: #111111;
  border-radius: 10px;
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

const ArtistSection = styled.div`
  margin: 4rem 0;
  padding: 2rem;
  background: #111111;
  border-radius: 10px;
`;

const ArtistTitle = styled.h3`
  font-size: 1.5rem;
  color: #FFE395;
  margin-bottom: 1rem;
`;

const ArtistImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin: 1rem 0;
`;

const ArtistBio = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
`;

const SocialButton = styled.a`
  background: #333;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #FFE395;
    color: #000000;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px solid #333;
  color: #888;
  font-size: 0.9rem;
`;

const FycGrammy = () => {
  return (
    <Container>
      <Header>
        <Title>For Your GRAMMY® Consideration</Title>
        <Subtitle>Global Music Performance</Subtitle>
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

      <VideoSection>
        <Subtitle>A SYMPHONIC THILLANA IN HAMIR KALYANI</Subtitle>
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

      <DescriptionSection>
        <p>This symphonic journey started with a dream: to let Carnatic music soar on the world stage. Today, that dream feels one step closer. 💛</p>
        
        <p>—a groundbreaking musical experience where the grandeur of symphonic orchestration meets the timeless beauty of Carnatic music.</p>
        
        <p>This Thillana is unlike any other. Traditionally composed for dance, it takes on a new dimension in this unique interpretation—set against breathtaking visuals of birds in motion. From the tranquil waters of Bharatpur to stunning landscapes across India, witness nature's rhythm come alive through the soaring, gliding, and fishing movements of birds, perfectly synchronized with the music.</p>
        
        <p>The music was recorded live in Valencia, Spain, with a world-class symphony orchestra, bringing depth and richness to this Carnatic gem. Every note and every orchestral layer elevates the essence of the raga, reimagining its beauty on an epic scale.</p>
        
        <p>More than just a musical piece, this Symphonic Thillana is an immersive experience—a celebration of nature, melody, and visual storytelling. Let the harmony of birds and music transport you to a world where tradition and innovation merge seamlessly.</p>
      </DescriptionSection>

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

      <ArtistSection>
        <ArtistTitle>Featured Artists on Wings of Gold</ArtistTitle>
        
        <div style={{marginBottom: '3rem'}}>
          <h4 style={{color: '#FFE395', fontSize: '1.2rem'}}>Sanjeev Venkataramanan</h4>
          <ArtistImage 
            src="https://files.constantcontact.com/f21a56a9801/6b390ddd-40a8-4008-af60-e7f6d48f45af.jpg?rdr=true" 
            alt="Sanjeev Venkataramanan"
          />
          <ArtistBio>
            Sanjeev Venkataramanan is a Chennai-based violinist–composer and orchestral arranger and a Recording Academy Voting Member, whose work builds a modern instrumental repertoire for Carnatic music. In Wings of Gold, he reimagines the Thillana for full symphony orchestra weaving precise raga grammar with cinematic orchestration. The music is paired with a nature-led visual narrative (birds in motion across India), shaping an immersive experience where tradition and symphonic scale meet.
            <br/><br/>
            <strong>Recent Recognition (highlights):</strong><br/>
            • InterContinental Music Awards 2025 — Winner (World Music) for Wings of Gold<br/>
            • Global Music Awards 2025 — Bronze Medal (Music Video, Composition, Entertainment Value) for Wings of Gold<br/>
            • Multiple international honors for the earlier project Lost in Harmony (Original Score/Best Musical/Best Score)
          </ArtistBio>
        </div>

        <div style={{marginBottom: '3rem'}}>
          <h4 style={{color: '#FFE395', fontSize: '1.2rem'}}>Navin Chandar Sekhar - Featured Artist (Flute)</h4>
          <ArtistImage 
            src="https://files.constantcontact.com/f21a56a9801/0348abc2-7c21-4bab-aae6-244017c1a687.jpg?rdr=true" 
            alt="Navin Chandar Sekhar"
          />
          <ArtistBio>
            Flute Navin (Navin Chandar Sekhar) — Featured Artist (Flute) on Wings of Gold – A Symphonic Thillana in Hamir Kalyani — is an internationally acclaimed flautist, composer, and a Recording Academy™ voting member. He performed on the soundtrack of the Oscar-winning film Slumdog Millionaire with A.R. Rahman and has collaborated with Germany's prestigious Babelsberg Orchestra. A featured artist with EarthSync, Navin has appeared on major stages worldwide, including the Perth International Arts Festival, and toured globally with Rahman. Navin Chandar Sekhar's album The London Bridge Sessions was submitted for GRAMMY® consideration, reflecting his global vision. As a music director, he has scored films such as Kalyana Samayal Saadham, Peruchazhi, and Vil Ambu. On Wings of Gold, Navin's lyrical tone and agile improvisation illuminate the raga's flight motifs.
          </ArtistBio>
        </div>

        <div style={{marginBottom: '3rem'}}>
          <h4 style={{color: '#FFE395', fontSize: '1.2rem'}}>Akshay Ananthapadmanabhan - Featured Percussionist (Mridangam)</h4>
          <ArtistImage 
            src="https://files.constantcontact.com/f21a56a9801/7c3b94ca-0a5d-4924-b06a-f8d89999c896.jpg?rdr=true" 
            alt="Akshay Ananthapadmanabhan"
          />
          <ArtistBio>
            Akshay Anantapadmanabhan — Featured Percussionist (Mridangam) on Wings of Gold – A Symphonic Thillana in Hamir Kalyani — is a leading Indian percussionist, composer, educator, and mridangam innovator, honored with the Sangeet Natak Akademi Yuva Puraskar. A key contributor to boundary-pushing projects like Carnatic 2.0 and The Thayir Sadam Project, he brings classical depth and contemporary edge to modern soundscapes. Akshay has collaborated with GRAMMY®-nominated artists, performed at Burning Man, and toured globally across major festivals, bridging tradition and innovation through rhythm, tone, and dynamic ensemble interplay. As Featured Percussionist (Mridangam) on Wings of Gold – A Symphonic Thillana in Hamir Kalyani, his playing anchors the work's rhythmic architecture and propels its symphonic energy with precision and warmth.
          </ArtistBio>
        </div>

        <div style={{marginBottom: '3rem'}}>
          <h4 style={{color: '#FFE395', fontSize: '1.2rem'}}>Jacopo Mezanotti – Orchestra Conductor</h4>
          <ArtistImage 
            src="https://files.constantcontact.com/f21a56a9801/b64e5423-474f-4bf2-8dec-d77499ac4c2f.jpg?rdr=true" 
            alt="Jacopo Mezanotti"
          />
          <ArtistBio>
            Jacopo Mezzanotti — Conductor (Valencia session) —Jacopo Mezzanotti is a Valencia-based guitarist, composer, and producer; Editor-in-Chief (Didactics) at Cutaway Guitar Magazine and Teaching Assistant for Berklee's online guitar MOOC. Endorsed by Guitarras Raimundo and collaborating with Aclam Guitars, he has worked with Uruguay's OSSODRE and performed with the Orquesta Sinfónica de España at Palau de la Música. He conducted the Valencia session for Wings of Gold and is a featured artist in this single.
          </ArtistBio>
        </div>
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
        <SocialButton 
          href="mailto:sanvenk@gmail.com"
        >
          Contact Voting Member
        </SocialButton>
      </SocialLinks>

      <Footer>
        <p>2025© All Rights Reserved</p>
        <p>FYC by MoPromo | has no influence on connection to or affiliation with the GRAMMY® or The Recording Academy ™</p>
      </Footer>
    </Container>
  );
};

export default FycGrammy;