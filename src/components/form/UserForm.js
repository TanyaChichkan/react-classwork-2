import React, { Component } from 'react';
import styles from '../form/UserForm.module.css';

const User_Info={
    login:"",
    email:"",
    password: "",
    role: "",
    contacts:"",
    comments: ""
  }

class UserForm extends Component{

  state =  {
    ...User_Info
  };

  changeCredentials=({target})=>{
    const{name,value} = target;
    this.setState({[name]:value});
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({...User_Info});
  }


  render() {
    const {login, email, password,role,contacts,comments} = this.state;

    return (
    <form onSubmit={this.handleSubmit}>
      <div className={styles.inputWrapper}>
        <label htmlFor="login">Прізвище</label>
        <br/>
        <input type="text"
        name="login"
        placeholder="Enter login"
        id="login"
        value={login}
        onChange={this.changeCredentials}
        className={styles.inputForm}
        autoComplete="true"
        />
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="email">Електронна пошта</label>
        <br/>
        <input type="email"
        name="email"
        placeholder="Enter email"
        id="email"
        value={email}
        onChange={this.changeCredentials}
        className={styles.inputForm}
        autoComplete="true"
        />
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="password">Пароль</label>
        <br/>
        <input type="password"
        name="password"
        placeholder="Enter password"
        id="password"
        value={password}
        onChange={this.changeCredentials}
        className={styles.inputForm}
        autoComplete="true"
        />
       </div>

       <textarea
          name="contacts"
          placeholder="Контактна інформація"
          value={contacts}
          onChange={this.changeCredentials}
          className={styles.Textarea}
        ></textarea>
        <br/>

        <textarea
          name="comments"
          placeholder="Додаткова інформація"
          value={comments}
          onChange={this.changeCredentials}
          className={styles.Textarea}
        ></textarea>
        <br/>

        <div className={styles.inputWrapper}>
          <label htmlFor="role" className = {styles.SelectLabel}>Ваша роль</label>
            <select id="role" name="role" value={role} onChange={this.changeCredentials}>
              <option value="" disabled>Choose a role</option>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

      <button type="submit" className={styles.formButton}>Зберегти</button>
    </form>
    )}
};

export default UserForm;