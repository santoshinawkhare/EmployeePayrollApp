class EmployeePayrollData {
    get id(){return this._id;}
    set id(id){
        this._id =id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Name is Incorrect";
    }

    get email() {
        return this._email;
    }

    set email(email) {
        let mailRegex = RegExp("[a-z0-9]+((\\.)[a-z0-9]+)?@[a-z0-9]+(\\.)co(\\.)[a-z]$");
        if (mailRegex.test(email))
            this._email = email;
        else
            throw "Email is Incorrect";
    }

    get phone() {
        return this._phone;
    }

    set phone(phone) {
        let phoneRegex = RegExp("/^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/");
        if (phoneRegex.test(phone))
            this._phone = phone;
        else
            throw "Phone No is Incorrect";
    }
    get Empid() {
        return this._Empid;
    }

    set Empid(Empid) {
        let EmpidRegex = RegExp("/^([A-Za-z]{2,}-\d+;)+$/");
        if (EmpidRegex.test(Empid))
            this._Empid = Empid;
        else
            throw "Emp id is Incorrect";
    }
    
    get profileImage() {
        return this._profileImage;
    }

    set profileImage(profileImage) {
        this._profileImage = profileImage;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;

    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        var today = new Date();
        if(today < startDate )
            throw 'Start date is in the Future';
        const minDate = new Date(today.setDate(today.getDate()-30));
        today = new Date();
        if(startDate < minDate)
            throw '**** START DATE is Incorrect ****';
        else {
            this._startDate = startDate;
        }
     
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.DOB == undefined ? "undefined" : this.DOB.toLocaleDateString("en-us", options);
        return "Id = " + this.id + "\nName = " + this.name + "\nProfile Image = " + this.profileImage + "\nGender = " + this.gender + "\nDepartment = " + this.department + "\nSalary = " + this.salary + "\nStart Date = " + employeeDate + "\nNotes = " + this.notes;
    }
}