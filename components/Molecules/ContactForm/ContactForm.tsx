import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Alert } from "@heroui/alert";

import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);

  function showSuccessAlert() {
    setIsSuccessAlertVisible(true);
    setTimeout(() => {
      hideSuccessAlert();
    }, 8000);
  }

  function hideSuccessAlert() {
    setIsSuccessAlertVisible(false);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("Hand Phone is required"),
      message: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("values", values);
      try {
        const response = await fetch("/.netlify/functions/sendContactEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (response.ok) {
          console.log("Email sent successfully:", result.message);
          showSuccessAlert();
          resetForm(); // Reset the form after successful submission
        } else {
          console.error("Failed to send email:", result.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
      <div className={styles.formContainer}>
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

          <p className="font-extrabold text-lg  flex items-center space-x-2">
            <span>✨</span> <span>Are you ready to transform?</span>{" "}
            <span>✨</span>
          </p>

          <div className="py-4">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-sm">Call us on</p>
              <p className="text-xs">+91 7022366007</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-sm">Address</p>
              <p className="text-xs">Bengaluru Karnataka India 560085</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-sm">Write to us at:</p>
              <p className="text-xs text-linkHover">
                <a href="mailto:info@wtfit.co.in">info@wtfit.co.in</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <Input
              fullWidth
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
              errorMessage={formik.touched.name && formik.errors.name}
              isInvalid={formik.touched.name && Boolean(formik.errors.name)}
              label="Name"
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <Input
              fullWidth
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
              errorMessage={formik.touched.email && formik.errors.email}
              isInvalid={formik.touched.email && Boolean(formik.errors.email)}
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          {/* Hand Phone */}
          <div>
            <Input
              fullWidth
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
              errorMessage={formik.touched.phone && formik.errors.phone}
              isInvalid={formik.touched.phone && Boolean(formik.errors.phone)}
              label="Phone"
              name="phone"
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          {/* Message */}
          <div>
            <Textarea
              fullWidth
              classNames={{
                errorMessage: "text-red-500 absolute right-0 top-0",
              }}
              errorMessage={formik.touched.message && formik.errors.message}
              isInvalid={
                formik.touched.message && Boolean(formik.errors.message)
              }
              label="Message"
              name="message"
              value={formik.values.message}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>

          <div className="mt-8">
            <Button
              className="w-full"
              color="secondary"
              size="lg"
              type="submit"
            >
              <span className="text-white">Submit</span>
            </Button>
          </div>
          <div className={styles.alertContainer}>
            <Alert
              color="success"
              isVisible={isSuccessAlertVisible}
              title="We have received your message and will get back to you soon."
              variant="faded"
              onClose={hideSuccessAlert}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
