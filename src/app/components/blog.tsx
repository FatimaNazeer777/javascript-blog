import Image from "next/image";
import img1 from "../images/historyjavascript.png";
import img2 from "../images/learn-javascript.webp";
import img3 from "../images/advance-javascript.png";
import img4 from "../images/jsversion.png";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4 p-6">
        
        {/* Card 1 */}
        <div className="mr-4 card card-side bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure className="w-full">
            <Image
              src={img1}
              alt="History of JavaScript"
              width={500}  
              height={300} 
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-600">History of JavaScript</h2>
            <p>
              JavaScript has evolved over the years, becoming one of the most
              essential languages for web development. From its early days as
              a simple scripting language, JavaScript now powers interactive
              features across the web.
            </p>
            <div className="card-actions justify-end">
              <Link href="/jsHistory">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mr-4 card card-side bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure className="w-full">
            <Image
              src={img2}
              alt="Learn JavaScript"
              width={500}  
              height={300}  
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-600">Learn JavaScript!</h2>
            <p>
              JavaScript is a versatile programming language that can be
              used to build dynamic websites and applications. Whether you are
              a beginner or looking to expand your skills, learning JavaScript
              opens doors to endless opportunities.
            </p>
            <div className="card-actions justify-end">
              <Link href="/learnJs">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="mr-4 card card-side bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure className="w-full">
            <Image
              src={img3}
              alt="Advanced JavaScript"
              width={500} 
              height={300}  
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-600">Advanced JavaScript</h2>
            <p>
              As you become more proficient with JavaScript, you can dive
              into more advanced topics like closures, asynchronous programming,
              and working with APIs. Mastering these concepts will make you
              an expert in JavaScript development.
            </p>
            <div className="card-actions justify-end">
              <Link href="/advancejs">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="mr-4 card card-side bg-base-100 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure className="w-full">
            <Image
              src={img4}
              alt="JavaScript Versions"
              width={500} 
              height={300}  
              className="object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-600">JavaScript Versions</h2>
            <p>
              JavaScript has seen many versions, each adding new features and
              improvements. Understanding the differences between these versions
              is crucial for writing efficient and compatible code across
              different environments.
            </p>
            <div className="card-actions justify-end">
              <Link href="/jsVersion">
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
