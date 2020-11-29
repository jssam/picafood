import axios from "axios";
export default axios.create(
    {
baseURL:"https://api.yelp.com/v3/businesses"
,headers:
{
Authorization: 'Bearer c2YGUzy-akgjjABDmtcWJKNG9WJWM_sHTd584NIL0Xe4XrW9jvUbIl0gRdHOJ5l3heZ-yxadu2Mcd2RFCaWWAx2tEtHz8QiLSeSPM8IzE1AI9xlOU34-wdKsLWjSXnYx'
}
    }
);