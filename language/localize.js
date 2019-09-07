import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

let strings = new LocalizedStrings({
  en: {
    //Screens
    name: 'Name',
    username: 'username',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    package: 'Package',
    //Sign Up forms
    password: 'Password',
    rePassword: 'Confirm Password',
    phone: 'Phone',
    email: 'Email',
    city: 'City',
    //Validation
    usernameValidation: {
      required: 'Username is required',
      min: 'Username is too short',
      max: 'Username should not be more than 24 character',
      label: 'username',
    },
    passwordValidation: {
      required: 'Password is required',
      min: 'Password should be 6 characters or more',
      max: 'Password cannot be more than 24 character',
      label: 'Password',
    },
    repasswordValidation: {
      required: 'Confirm Password is required',
      test: "Password doesn't match",
      label: 'Confirm Password',
    },
    emailValidation: {
      required: 'Email is required',
      email: 'Invalid Email !',
      label: 'Email',
    },
    phoneValidation: 'Phone number is not valid',
    signInEmptyFieldsError: 'Missing username or password.',
    sideMenuScreens: {
      home: 'Home',
      personal: 'Personal',
      orders: 'Orders',
      settings: 'Settings',
      contactUs: 'Contact us',
      policy: 'Privacy Policy',
      exit: 'Exit',
    },
    //Shipping or Transfare
    shipping: 'shipping',
    transfare: 'transfare',
    receipt: 'Receipt',
    summary: 'Summary',
    //package
    packageDetails: 'Package Details',
    whatIsTheContent: 'What is the content?',
    notes: 'Notes',
    notesHere: 'Add your notes here',
    private: 'Private',
    whatDoYouWant: 'what do you want?',
    subscribed: 'subscribed',
    containerType: 'container type',
    add: 'Add',
    chooseDestination: 'Choose destination:',
    choosePort: 'Choose port:',
    continue: 'Continue',
  },
  ar: {
    name: 'الأسم',
    username: 'اسم المستخدم',
    signIn: 'تسجيل الدخول',
    signUp: 'تسجيل',
    package: 'الطرد',
    password: 'الرقم السري',
    rePassword: 'تأكيد كلمة السر',
    phone: 'الهاتف',
    email: 'البريد الالكتروني',
    city: 'المدينه',
    usernameValidation: {
      required: 'ادخل اسم المستخدم',
      min: 'الاسم قصير',
      max: 'الاسم لا يجب ان يكون اكثر من 24 حرف',
      label: 'اسم المستخدم',
    },
    passwordValidation: {
      required: 'ادخل كلمة السر',
      min: 'كلمة السر اقل من 6 احرف',
      max: 'كلمة السر لا يجب ان تكون كبر من 24 حرف',
      label: 'كلمة السر',
    },
    repasswordValidation: {
      required: 'ادخل تأكيد كلمة السر',
      test: 'الرقم السري غير متطابق',
      label: 'تأكيد كلمة السر',
    },
    emailValidation: {
      required: 'ادخل البريد الالكتروني',
      email: 'البريد الالكتروني غير صحيح !',
      label: 'البريد الالكتروني',
    },
    phoneValidation: 'رقم الهاتف غير صحيح',
    signInEmptyFieldsError: 'من فضلك ادخل اسم المستخدم و كلمة السر',
    sideMenuScreens: {
      home: 'الرئيسية',
      personal: 'الشخصية',
      orders: 'الطلبات',
      settings: 'الاعدادات',
      contactUs: 'اتصل بنا',
      policy: 'الشروط و الاحكام',
      exit: 'خروج',
    },
    shipping: 'شحن',
    transfare: 'نقل',
    receipt: 'استلام',
    summary: 'الملخص',
    //package
    packageDetails: 'عرف شحنتك',
    whatIsTheContent: 'ما المحتوي؟',
    notes: 'ملاحظات',
    notesHere: 'ادخل ملاحظاتك هنا',
    private: 'خاص',
    whatDoYouWant: 'ما الذي تريده؟',
    subscribed: 'مشترك',
    containerType: 'نوع الحاويه',
    add: 'أضف',
    chooseDestination: 'اختر الواجهه:',
    choosePort: 'اختر الميناء:',
    continue: 'متابعه',
  },
});

export default strings;
