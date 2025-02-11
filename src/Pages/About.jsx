const About = () => {
    return (
      <div className="bg-orange-50 min-h-screen py-12 px-6">
        <div className="w-full bg-orange-100 mx-auto text-center py-12 px-8 rounded-3xl">
          <h1 className="text-5xl font-bold text-gray-800">About ReclaimIt</h1>
          <p className="mt-4 text-lg text-gray-700">
            ReclaimIt is a platform dedicated to sustainable living by helping users
            give a second life to pre-loved items. Our goal is to reduce waste and promote
            a circular economy by connecting people who want to donate, exchange, or reclaim
            used products.
          </p>
        </div>
  
        <div className="max-w-3xl mx-auto mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose ReclaimIt?</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Easy and intuitive platform to donate and claim items</li>
            <li>Supports sustainable and eco-friendly living</li>
            <li>Encourages community-driven sharing and reusing</li>
            <li>Completely free to use</li>
          </ul>
        </div>
  
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-gray-300">
              <input type="radio" name="faq" defaultChecked />
              <div className="collapse-title text-lg font-medium">How does ReclaimIt work?</div>
              <div className="collapse-content">
                <p>Users can list items they want to give away, and others can claim them for free.</p>
              </div>
            </div>
  
            <div className="collapse collapse-arrow join-item border border-gray-300">
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-medium">Is it free to use?</div>
              <div className="collapse-content">
                <p>Yes! ReclaimIt is completely free for all users.</p>
              </div>
            </div>
  
            <div className="collapse collapse-arrow join-item border border-gray-300">
              <input type="radio" name="faq" />
              <div className="collapse-title text-lg font-medium">What types of items can I donate?</div>
              <div className="collapse-content">
                <p>You can donate clothes, books, furniture, electronics, and more, as long as they are in usable condition.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;