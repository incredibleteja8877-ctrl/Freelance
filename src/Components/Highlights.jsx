import roller1 from '../assets/Rolling pics/rollers (1).jpeg'
import roller2 from '../assets/Rolling pics/rollers (2).jpeg'
import roller3 from '../assets/Rolling pics/rollers (3).jpeg'
import roller4 from '../assets/Rolling pics/rollers (4).jpeg'
import roller5 from '../assets/Rolling pics/rollers (5).jpeg'
import roller6 from '../assets/Rolling pics/rollers (6).jpeg'
import roller7 from '../assets/Rolling pics/rollers (7).jpeg'
import roller8 from '../assets/Rolling pics/rollers (8).jpeg'
import roller9 from '../assets/Rolling pics/rollers (9).jpeg'
import roller10 from '../assets/Rolling pics/rollers (10).jpeg'
import roller11 from '../assets/Rolling pics/rollers (11).jpeg'
import roller12 from '../assets/Rolling pics/rollers (12).jpeg'
import roller13 from '../assets/Rolling pics/rollers (13).jpeg'
import roller14 from '../assets/Rolling pics/rollers (14).jpeg'
import roller15 from '../assets/Rolling pics/rollers (15).jpeg'
import roller16 from '../assets/Rolling pics/rollers (16).jpeg'
import roller17 from '../assets/Rolling pics/rollers (17).jpeg'
import roller18 from '../assets/Rolling pics/rollers (18).jpeg'

const highlights = [roller1, roller11, roller2, roller12, roller3, roller13, roller4, roller14, roller5, roller15, roller6, roller16, roller7, roller17, roller8, roller18, roller9, roller10]
const loopedHighlights = [...highlights, ...highlights]

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-track">
        {loopedHighlights.map((photo, index) => (
          <img key={index} src={photo} alt="SSD Yogashala highlight" className="highlights-photo" loading="lazy" />
        ))}
      </div>
    </section>
  )
}

export default Highlights
