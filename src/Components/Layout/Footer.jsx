const Footer = () => {
  return (
    <footer>
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li class="ms-3">
            <a className="link-dark" href="#">
              <svg class="bi" width="24" height="24">
                <use xlinkHref="#twitter"></use>
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a className="link-dark" href="#">
              <svg class="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a className="link-dark" href="#">
            <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
