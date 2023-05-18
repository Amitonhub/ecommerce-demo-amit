import { UseFormReturn, useForm } from "react-hook-form";
import styles from "./Login.module.css";
import logincart from "../../assets/logincart.png";
import { LogIn } from "../types/Types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/actions/LogInAction";
import { setUserDataInLocalStorage } from "@/localstorage/localstorage";
import { useRouter } from "next/router";
import { useFetchLogInDataMutation } from "@/pages/api/Api";
import Swal from "sweetalert2";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: UseFormReturn<LogIn> = useForm();
  const [fetchLogInData, { isLoading, isError, data, error }] = useFetchLogInDataMutation();

  const onSubmit = (data: LogIn) => {
    fetchLogInData(data)
      .unwrap()
      .then((response: LogIn) => {
        Swal.fire({
          title: "Logged In!",
          text: "You have been Successfully logged In!",
          icon: "success",
        });
        dispatch(logIn(response));
        setUserDataInLocalStorage(response);
        router.push("/");
      });
    console.log(data);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <div className={styles.sideImageParent}>
              <div className={styles.sideImage}>
                <img
                  className={styles.dlbeatsnoop1Icon}
                  alt=""
                  src={logincart.src}
                />
              </div>
            </div>
          </Col>
          <Col md={6} lg={8}>
            <div className={styles.frameParent}>
              <form
                className={styles.frameGroup}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={styles.logInToExclusiveParent}>
                  <div className={styles.logInTo}>Log in to Exclusive</div>
                  <div className={styles.enterYourDetails}>
                    Enter your details below
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.emailOrPhoneNumberParent}>
                    <input
                      type="text"
                      className={styles.emailOrPhone}
                      placeholder="Email"
                      {...register("username", { required: true })}
                      name="username"
                    />
                    {errors?.username && (
                      <Form.Text>{errors?.username.message}</Form.Text>
                    )}
                    <div className={styles.underline}></div>
                  </div>
                  <div className={styles.emailOrPhoneNumberParent}>
                    <input
                      type="password"
                      className={styles.emailOrPhone}
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                      })}
                      name="password"
                    />
                    {errors.password && (
                      <Form.Text>{errors.password.message}</Form.Text>
                    )}
                    <div className={styles.underline}></div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.buttonWrapper}>
                    <button className={styles.button} type="submit">
                      <div className={styles.viewAllProducts}>Log In</div>
                    </button>
                  </div>
                  <a className={styles.forgetPassword}>Forget Password?</a>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
