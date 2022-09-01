
const CONSTANTS = {
  COUNTRY_LIST: ['America', 'Africa', 'Australia', 'Bangladesh', 'Bhutan', 'Europe', 'China', 'France', 'Germany', 'India', 'Japan', 'Malaysia', 'Singapore', 'Uganda', 'United Kingdom', 'Zimbabwe'],
  STATE_LIST: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],
  SKILLS_LIST: ['C ', 'C++ ', 'Python ', 'Java ', 'Html & CSS', 'MS Office ', 'Cricket ', 'Volley Ball ', 'Foot Ball ', 'Carrom ', 'Chess '],
  SCHOLARSHIP_LIST: ['SOF Scholarship of Excellence in English (S.E.E)', 'INSPIRE Scholarship For Higher Education (SHE)', 'Siemens Scholarship Program', 'Kishore Vaigyanik Protsahan Yojana (KVPY)', 'Dhirubhai Ambani Scholarship Programme', 'National Scholarship', 'JM Sethia Merit Scholarship Scheme', 'A-STAR India Youth Scholarship', '	Abdul Kalam Technology Innovation National Fellowship'],
  FORM_RULES: {
    studentName: [{ required: true, message: ' ', trigger: 'blur' }],
    studentRegistrationNumber: [{ required: true, message: ' ', trigger: 'blur' }],
    dateOfBirth: [{ required: true, message: ' ', trigger: 'blur' }],
    gender: [{ required: true, message: ' ', trigger: 'change' }],
    phoneNumber: [{ type: 'number', required: true, message: ' ', trigger: 'blur' }, { pattern: /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/, message: ' ', trigger: 'blur' }],
    fatherName: [{ required: true, message: ' ', trigger: 'blur' }],
    email: [{ pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: ' ', trigger: 'blur' }],
    homePhoneNumber: [{ pattern: /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/, message: ' ', trigger: 'blur' }],
    'address.pinCode': [{ pattern: /^(\d{6})$/, message: ' ', trigger: 'blur' }],
  },
  FORM_LIST: {
    studentName: '',
    studentRegistrationNumber: '',
    dateOfBirth: "",
    phoneNumber: '',
    email: '',
    gender: 'Male',
    mediumOfStudy: 'English',
    fatherName: '',
    motherName: '',
    homePhoneNumber: '',
    skills: [],
    checkList: [],
    change: false,
    scholarship: '',
    travelMode: 'College Bus',
    address: {
      doorNumber: '',
      streetName: '',
      city: '',
      states: '',
      countryList: '',
      pinCode: ''
    }
  }
}
export default CONSTANTS