const stringifyDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const newDate = !date ? "undefined" : new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
  }
  
  const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (!nameRegex.test(name))
      throw "Name is Incorrect";
  }
  
  const checkEmail = () => {
    let mailRegex = RegExp("[a-z0-9]+((\\.)[a-z0-9]+)?@[a-z0-9]+(\\.)co(\\.)[a-z]$");
    if (!mailRegex.test(email))
      throw "Email is Incorrect";
  }
  const checkPhone = () => {
    let phoneRegex = RegExp("/^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/");
    if (!phoneRegex.test(phone))
      throw "Phone No is Incorrect";
  }
  const checkEmpid = (Empid) => {
    let empidRegex = RegExp("/^([A-Za-z]{2,}-\d+;)+$/");
    if (!empidRegex.test(Empid))
      throw "Empid No is Incorrect";
  }
  const checkstartDate = (startDate) => {
    var today = new Date();
    if (today < startDate)
      throw 'Start date is in the Future';
    const minDate = new Date(today.setDate(today.getDate() - 120));
    today = new Date();
    if (startDate < minDate)
      throw 'Start date is Beyond 4 months';
  }