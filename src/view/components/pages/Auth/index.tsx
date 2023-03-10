import React from "react";
import UI from "../../UI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { LoginRequestAction } from "../../../../data/store/auth/login/login.actions";
import { HOME_ROUTE } from "../../../../data/router/utils/authRoutes.utils";

import styles from "./index.module.scss";

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value: email, onChange: onChangeEmail } = useInput();
  const { value: password, onChange: onChangePassword } = useInput();
  const { error, user } = useTypedSelector((state) => state.login);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const onLoginHandler = () => {
    dispatch(LoginRequestAction({ email, password }));
  };

  React.useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
    if (user.email) {
      navigate(HOME_ROUTE);
    }
  }, [error, user]);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(HOME_ROUTE);
    }
  }, []);

  return (
    <div className={styles.auth}>
      <div className={styles.wrapper}>
        <p
          style={{
            color: "white",
            paddingBottom: "100px",
            textAlign: "center",
          }}
        >
          Нажмите на клавиатуре F11 для комфортного использования сайта
          <br />
          <br />
          email: mock1@root.com
          <br />
          email: mock2@root.com
          <br />
          email: mock3@root.com
          <br />
          password: root
        </p>
        <div className={styles.userAvatar}>
          <svg
            height="80px"
            width="80px"
            viewBox="0 0 341.549 341.549"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <g>
                <g>
                  <g>
                    <path
                      fill="#F3D8B6"
                      d="M253.964,245.996c-18.667-6.681-51.458-11.736-51.458-81.376h-29.23h-5.002 h-29.23c0,69.64-32.791,74.695-51.458,81.376c0,47.368,68.832,48.824,80.688,53.239v1.537c0,0,0.922-0.188,2.501-0.68 c1.579,0.492,2.501,0.68,2.501,0.68v-1.537C185.131,294.82,253.964,293.363,253.964,245.996z"
                    ></path>
                  </g>
                  <path
                    fill="#EEC8A2"
                    d="M202.506,164.62h-29.23h-2.501v135.471c1.579,0.492,2.501,0.68,2.501,0.68v-1.537 c11.856-4.415,80.688-5.871,80.688-53.239C235.297,239.315,202.506,234.26,202.506,164.62z"
                  ></path>
                </g>
                <g>
                  <g>
                    <path
                      fill="#F3DBC4"
                      d="M170.777,186.782c-27.454,0-48.409-23.119-57.799-40.456 s-15.888-77.445,4.34-104.897c19.808-26.883,53.459-23.838,53.459-23.838s33.649-3.045,53.458,23.838 c20.226,27.452,13.726,87.56,4.335,104.897C219.178,163.663,198.225,186.782,170.777,186.782z"
                    ></path>
                  </g>
                  <path
                    fill="#EDCEAE"
                    d="M224.235,41.429c-19.81-26.883-53.458-23.838-53.458-23.838h-0.002v169.191 c0.001,0,0.001,0,0.002,0c27.449,0,48.401-23.119,57.794-40.456C237.961,128.989,244.461,68.882,224.235,41.429z"
                  ></path>
                </g>
                <g>
                  <path
                    fill="#A97C75"
                    d="M237.227,109.439c-0.725,14.745-22.425,29.324-29.599,39.061 c-16.801,22.803-36.854,3.24-36.854,3.24s-20.051,19.563-36.854-3.24c-7.173-9.735-28.871-24.311-29.596-39.054 c-1.19,20.863,11.665,42.273,16.381,50.979c7.973,14.719,26.764,34.348,50.072,34.348c23.304,0,42.094-19.629,50.068-34.348 C225.561,151.717,238.417,130.304,237.227,109.439z"
                  ></path>
                  <path
                    fill="#976F6A"
                    d="M237.227,109.439c-0.725,14.744-22.425,29.324-29.599,39.061 c-16.775,22.767-36.79,3.302-36.853,3.241v43.031h0.001c23.304,0,42.094-19.628,50.068-34.348 C225.561,151.717,238.417,130.304,237.227,109.439z"
                  ></path>
                </g>
                <g>
                  <g>
                    <path
                      fill="#A0756F"
                      d="M206.114,25.918c0,0-24.427-32.813-39.707-24.598 c-39.045,20.991-44.219,18.365-52.979,21.408c-21.241,7.378-21.798,5.405-19.122,21.776c8.879,54.319-0.557,79.337,15.961,59.147 s22.025-15.423,64.073-20.012s15.256-23.363,37.28-8.18s24.919,42.732,28.589,42.732c3.671,0,11.84-52.59,6.283-68.911 C234.63,14.439,206.114,25.918,206.114,25.918z"
                    ></path>
                  </g>
                  <path
                    fill="#8C6762"
                    d="M246.492,49.281c-11.862-34.842-40.378-23.362-40.378-23.362 S185.925-1.197,170.775,0.045v83.97c1.16-0.118,2.344-0.242,3.564-0.375c42.047-4.588,15.256-23.363,37.28-8.18 c22.025,15.184,24.919,42.732,28.589,42.732S252.049,65.603,246.492,49.281z"
                  ></path>
                </g>
                <g>
                  <ellipse
                    transform="matrix(0.3543 -0.9351 0.9351 0.3543 39.067 294.718)"
                    fill="#EDCEAE"
                    cx="232.948"
                    cy="119.069"
                    rx="17.187"
                    ry="10.048"
                  ></ellipse>
                  <ellipse
                    transform="matrix(0.3543 0.9351 -0.9351 0.3543 181.4726 -24.6648)"
                    fill="#F3DBC4"
                    cx="108.597"
                    cy="119.078"
                    rx="17.187"
                    ry="10.048"
                  ></ellipse>
                </g>
                <g>
                  <g>
                    <path
                      fill="#545465"
                      d="M290.757,300.867v40.681H50.793v-40.681c0-30.431,17.377-56.963,40.605-70.913 c6.043-3.641,19.69-7.43,26.844-9.196c5.953-1.488,53.438,22.729,53.438,22.729s48.674-23.218,54.627-21.729 c7.154,1.766,17.802,4.554,23.844,8.196C273.38,243.904,290.757,270.436,290.757,300.867z"
                    ></path>
                  </g>
                  <path
                    fill="#494857"
                    d="M250.152,229.954c-6.043-3.641-16.69-6.429-23.844-8.195 c-5.953-1.488-54.627,21.729-54.627,21.729s-0.321-0.164-0.906-0.459v98.52h119.982v-40.681 C290.757,270.436,273.379,243.904,250.152,229.954z"
                  ></path>
                </g>
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M218.942,216.981l-48.167,23.441l-48.167-23.441 c-11.5,5.5,10.396,38.436,14.833,36.833c10.963-3.96,33.334-10.329,33.334-10.329s22.371,6.369,33.334,10.329 C208.546,255.417,230.442,222.481,218.942,216.981z"
                  ></path>
                  <path
                    fill="#DEDDE0"
                    d="M218.942,216.981l-48.167,23.441v3.063c0,0,22.371,6.369,33.334,10.329 C208.546,255.417,230.442,222.481,218.942,216.981z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <form className={styles.from}>
          <UI.Input
            fullWidth
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />
          <UI.Input
            fullWidth
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <div onClick={onLoginHandler} className={styles.arrowRight}>
            <svg
              viewBox="0 -6.5 38 38"
              fill="#000000"
              className={styles.arrowSvgWrapper}
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <g
                  id="icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    transform="translate(-1511.000000, -158.000000)"
                    className={styles.arrowSvg}
                    fillRule="nonzero"
                  >
                    <g transform="translate(1350.000000, 120.000000)">
                      <path d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </form>
        <div className={styles.errorMessage}>{errorMessage}</div>
      </div>
    </div>
  );
};

export default Auth;
