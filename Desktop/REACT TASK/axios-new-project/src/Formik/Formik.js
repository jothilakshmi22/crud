// import react from "react";
import React from "react";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as Yup from "yup";

function Formik() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      dob: "",
      address: "",
      //   city: "",
      //   state: "",
      //   zipcode: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()

        .max(15, "Must be 15 characters")
        .min(2, "Must be minimum 2 character")
        .required("Required"),

      email: Yup.string().email("Enter a vaild email").required("Required"),
      dob: Yup.string()
        .matches(
          /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
          "Provide DOB in DD-MM-YYYY format"
        )
        .required("Required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Enter a vaild mobile number")
        .required("Required"),
      address: Yup.string(),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name" class="form-label">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            class="form-control"
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
          <label htmlFor="email " class="form-label">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            class="form-control"
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="name" class="form-label">
            Mobile
          </label>

          <input
            id="mobile"
            name="mobile"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            onBlur={formik.handleBlur}
            class="form-control"
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div style={{ color: "red" }}>{formik.errors.mobile}</div>
          ) : null}
          <label htmlFor="name" class="form-label">
            DOB
          </label>

          <input
            id="dob"
            name="dob"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.dob}
            onBlur={formik.handleBlur}
            class="form-control"
          />
          {formik.touched.dob && formik.errors.dob ? (
            <div style={{ color: "red" }}>{formik.errors.dob}</div>
          ) : null}
          <label htmlFor="name" class="form-label">
            Address
          </label>

          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
            onBlur={formik.handleBlur}
            class="form-control"
          />
          {formik.touched.address && formik.errors.address ? (
            <div style={{ color: "red" }}>{formik.errors.address}</div>
          ) : null}
          {/* <label htmlFor="name" class="form-label">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            class="form-control"
          />  */}
        </div>
        <button type="submit" class="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
}

export default Formik;
