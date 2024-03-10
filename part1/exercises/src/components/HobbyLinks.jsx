export default function HobbyLinks() {
    const hobbyLinks = ["https://en.wikipedia.org/wiki/Fly_fishing", "https://mostateparks.com/park/bennett-spring-state-park"]
    return (
        <div>
            <h3>Hobby Links!</h3>
               <a href = {hobbyLinks[0]}>Fly Fishing Wikipedia Article</a>
               <br />
               <a href = {hobbyLinks[1]}>Bennett Springs State Park</a>
        </div>
    );
}