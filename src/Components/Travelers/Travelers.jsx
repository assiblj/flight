import dubai from '../../assets/dubai.png'
import london from '../../assets/london.jpg'
import newyork from '../../assets/newyork.jpg'
import maroc from '../../assets/maroc.jpg'
import traveler1 from '../../assets/user1.png'
import traveler2 from '../../assets/user2.jpg'
import traveler3 from '../../assets/user3.jpg'
import traveler4 from '../../assets/user4.jpeg'


const travelers = [
  {
    id: 1,
    destinationImage: dubai,
    travelerImage: traveler1,
    travelerName: 'Kevin Joseph',
    socialLink: '@kevin76'
  },
  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: 'Harold Xaviour',
    socialLink: '@haider32'
  },
  {
    id: 3,
    destinationImage: newyork,
    travelerImage: traveler3,
    travelerName: 'Alex Russo',
    socialLink: '@alex46'
  },
  {
    id: 4,
    destinationImage: maroc,
    travelerImage: traveler4,
    travelerName: 'Justin Sky',
    socialLink: '@justin990'
  }
]

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this Month!</h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelersDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travelers
