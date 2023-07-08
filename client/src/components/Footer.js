function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10 p-5 pb-3 sm:p-8 sm:pb-3">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        <div className="mb-5 sm:mb-0">
          <h3 className="text-md mb-2">Genesis Tech Support</h3>
          <p>Your one-stop solution for all your tech needs.</p>
        </div>
        <div className="mb-5 sm:mb-0">
          <h3 className="text-md mb-2">Our Services</h3>
          <ul>
            <li>One-On-One Tech Education</li>
            <li>TV Mounting & Setup</li>
            <li>PC & Mac Software Troubleshooting</li>
            <li>In-Home Tech Support</li>
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-2">Contact</h3>
          <ul>
            <li>Phone: (123) 456-7890</li>
            <li>Email: support@genesistech.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12">
        <p>
          &copy; {new Date().getFullYear()} Genesis Tech Support. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
