import FetuaturedSection from "./components/featured-section"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../firebase'

export default function AllContent() {
  const [content, setContent] = useState([])
  
  useEffect(() => {
    async function getContent() {
      const contentCollectionRef = collection(db, 'content')
      const contentResult = await getDocs(contentCollectionRef)

      setContent( () => {
        return contentResult.docs.map( doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
      });
    }

    getContent()
  }, [])
  
  return (
    <div>
      <FetuaturedSection movie={content[Math.floor(Math.random() * content.length)]} />
      <div>
        <h1>content</h1>

        <div>
          {content.map( (current, index) => {
            return (
              <p key={index}>{current.title}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}