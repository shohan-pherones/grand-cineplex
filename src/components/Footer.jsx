const Footer = () => {
  return (
    <div className="text-center py-10 border-t border-dashed border-light/60">
      <p>
        &copy; {new Date().getFullYear()}, Grand Cineplex. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
