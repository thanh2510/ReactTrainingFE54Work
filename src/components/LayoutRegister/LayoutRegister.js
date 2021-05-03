import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { sentUserRegister } from "../../redux/actions/ManagerMemberActions";
import style from "./LayoutRegister.css";

export default function LayoutRegister(props) {
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data',data);
    dispatch(sentUserRegister(data))
  };
  return (
    <div className="LayoutRegister">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 style={{ color: "white", marginBottom: "0", paddingBottom: "0" }}>
          Create Your Accout
        </h4>
        <label style={{ marginTop: "5px" }}>Name account</label>
        <input
          {...register("taiKhoan", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.taiKhoan?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.taiKhoan?.type === "maxLength" && (
          <p>Name account cannot exceed 20 characters</p>
        )}
        {errors?.taiKhoan?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Password</label>
        <input type="password" {...register("matKhau", { minLength: 5 })} />
        {errors?.matKhau?.type === "minLength" && (
          <p>Password cannot Smaller 5 characters</p>
        )}
        <div className="d-flex">
          <div className="item" style={{ paddingRight: "5px" }}>
            <label>Email</label>
            <input
              {...register("email", {
                minLength: 6,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors?.email?.type === "minLength" && (
              <p>Password cannot Smaller 5 characters</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p>You can not creat email, please follow rule!</p>
            )}
          </div>
          <div className="item" style={{ paddingLeft: "5px" }}>
            <label>Your phone number</label>
            <input {...register("soDt", { pattern: /^\d{10}$/ })} />
            {errors?.soDt?.type === "pattern" && <p>You must be the rule!</p>}
          </div>
        </div>
        <div className="d-flex">
          <div className="item" style={{ paddingRight: "5px" }}>
            <label style={{ marginTop: "5px" }}>Your name</label>
            <input
              {...register("hoTen", {
                maxLength: 20,
              })}
            />
            {errors?.hoTen?.type === "maxLength" && (
              <p>Name account cannot exceed 20 characters</p>
            )}
          </div>
          <div className="item" style={{ paddingLeft: "5px" }}>
            <label style={{ marginTop: "5px" }}>Type your account</label>
            <select {...register("maLoaiNguoiDung")}>
              <option value="KhachHang">Khách hàng</option>
            </select>
          </div>
        </div>
        <input type="submit" />
        <div className='text-center'>
          <NavLink to='/' style={{marginRight:'5px'}}>Home</NavLink>
          <NavLink to='/login' style={{marginLeft:'5px'}}>Login</NavLink>
        </div>
      </form>
    </div>
  );
}
