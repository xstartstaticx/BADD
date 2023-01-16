import axios from "axios";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Label,
  TextInput,
  Checkbox,
  Button,
  Select,
  Radio,
  Dropdown,
} from "flowbite-react";
import { Context } from "./Context";
import Logo from "../images/caduceus.png";

const AddUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { state, dispatchState } = useContext(Context);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    medicalConditions: "",
    allergies: "",
    medications: "",
    bloodType: "APOS",
    weight: "",
    height: "",
    languages: [],
  });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/users/findOne/" + id);
      if (response.data.success) setData(response.data.user);
    };
    getData();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault()
    const response = await axios.post("/users/adduser", data);

    console.log("response is:", response);

    if (response.data.success) {
      dispatchState({
        type: "addToUser",
        payload: response.data.user,
      });
      navigate("/overview/" + response.data.user._id);
    } else {
      alert("There was an error. Please try again.");
    }
  };

  console.log(data);
  return (
    <div className="flex flex-col justify-center align-center w-[100vw]  border border-solid min-h-screen  ">
      <div className="m-auto justify-center align-center h-[700px]">
        <Card className=" w-[390px] h-[700px] ">
        <div className="flex justify-center">
                <h1 className="text-2xl text-[#D2F4F4] bg-[#116666] p-[20px] rounded-lg  ">
                  Health Pass
                </h1>
                <img
                  src={Logo}
                  className=" w-[75px] border-2 border-solid rounded-lg bg-[#E8F9F9]  "
                  alt=""
                />
              </div>
          <form className="flex flex-col gap-4 overflow-y-auto">
            <Label value="Edit your details:" />

            {/* First Name */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="firstName" value="First Name:" />
              </div>
              <TextInput
                id="firstName"
                type="text"
                placeholder="enter your first name"
                required={true}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
            </div>

            {/* Last Name */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastName" value="Last Name:" />
              </div>
              <TextInput
                id="lastName"
                type="text"
                placeholder="enter your last name"
                required={true}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
            </div>

            {/* Age */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="age" value="Age:" />
              </div>
              <div id="select">
                <Select
                  id="age"
                  required={true}
                  onChange={(e) => setData({ ...data, age: e.target.value })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                  <option value="51">51</option>
                  <option value="52">52</option>
                  <option value="53">53</option>
                  <option value="54">54</option>
                  <option value="55">55</option>
                  <option value="56">56</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                  <option value="59">59</option>
                  <option value="60">60</option>
                  <option value="61">61</option>
                  <option value="62">62</option>
                  <option value="63">63</option>
                  <option value="64">64</option>
                  <option value="65">65</option>
                  <option value="66">66</option>
                  <option value="67">67</option>
                  <option value="68">68</option>
                  <option value="69">69</option>
                  <option value="70">70</option>
                  <option value="71">71</option>
                  <option value="72">72</option>
                  <option value="73">73</option>
                  <option value="74">74</option>
                  <option value="75">75</option>
                  <option value="76">76</option>
                  <option value="77">77</option>
                  <option value="78">78</option>
                  <option value="79">79</option>
                  <option value="80">80</option>
                  <option value="81">81</option>
                  <option value="82">82</option>
                  <option value="83">83</option>
                  <option value="84">84</option>
                  <option value="85">85</option>
                  <option value="86">86</option>
                  <option value="87">87</option>
                  <option value="88">88</option>
                  <option value="89">89</option>
                  <option value="90">90</option>
                  <option value="91">91</option>
                  <option value="92">92</option>
                  <option value="93">93</option>
                  <option value="94">94</option>
                  <option value="95">95</option>
                  <option value="96">96</option>
                  <option value="97">97</option>
                  <option value="98">98</option>
                  <option value="99">99</option>
                  <option value="100">100</option>
                </Select>
              </div>
            </div>

            {/* Medical Conditions */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="medicalConditions"
                  value="Medical Conditions:"
                />
              </div>
              <TextInput
                id="medicalConditions"
                type="text"
                placeholder="separate by comma"
                required={true}
                onChange={(e) =>
                  setData({ ...data, medicalConditions: e.target.value })
                }
              />
            </div>

            {/* Allergies */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="allergies" value="Allergies:" />
              </div>
              <TextInput
                id="allergies"
                type="text"
                placeholder="separate by comma"
                required={true}
                onChange={(e) =>
                  setData({ ...data, allergies: e.target.value })
                }
              />
            </div>

            {/* Medications */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="medications" value="Medications:" />
              </div>
              <TextInput
                id="medications"
                type="text"
                placeholder="separate by comma"
                required={true}
                onChange={(e) =>
                  setData({ ...data, medications: e.target.value })
                }
              />
            </div>

            {/* Blood Type */}
           <Dropdown
              label="Blood Type:"
              placement="right"
              dismissOnClick={false}
             
              >
              <fieldset
                className="flex flex-col gap-4"
                id="radio"
                onChange={(e) =>
                  setData({ ...data, bloodType: e.target.value })
                }
              >
                <legend className="text-[.9rem] text-black font-bold ">
                  Select your blood type
                </legend>

                <div className="flex items-center gap-2">
                  <Radio
                    id="a-pos"
                    name="blood-types"
                    value="APOS"
                    defaultChecked={true}
                  />
                  <Label htmlFor="a-pos">A+</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Radio id="a-neg" name="blood-types" value="ANEG" />
                  <Label htmlFor="a-neg">A-</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Radio id="b-pos" name="blood-types" value="BPOS" />
                  <Label htmlFor="b-pos">B+</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Radio id="b-neg" name="blood-types" value="BNEG" />
                  <Label htmlFor="b-neg">B-</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Radio id="o-pos" name="blood-types" value="OPOS" />
                  <Label htmlFor="o-pos">O+</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Radio id="o-neg" name="blood-types" value="ONEG" />
                  <Label htmlFor="o-neg">O-</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Radio id="ab-pos" name="blood-types" value="ABPOS" />
                  <Label htmlFor="ab-pos">AB+</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Radio id="ab-neg" name="blood-types" value="ABNEG" />
                  <Label htmlFor="ab-neg">AB-</Label>
                </div>
              </fieldset>
            </Dropdown> 

            {/* Weight */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="weight" value="Weight:" />
              </div>
              <TextInput
                id="weight"
                type="text"
                placeholder="in kg"
                required={true}
                onChange={(e) => setData({ ...data, weight: e.target.value })}
              />
            </div>

            {/* Height */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="height" value="Height:" />
              </div>
              <TextInput
                id="height"
                type="text"
                placeholder="in cm"
                required={true}
                onChange={(e) => setData({ ...data, height: e.target.value })}
              />
            </div>

            {/* Languages */}
            <div
              className="flex flex-col gap-4"
              id="checkbox"
              onClick={(e) => setData({ ...data, languages: e.target.value })}
            >
              <Label>Languages:</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="english" value="english" />
                <Label htmlFor="english">English</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="deutsch" value="deutsch" />
                <Label htmlFor="deutsch">Deutsch</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="español" />
                <Label htmlFor="español">Español</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="français" />
                <Label htmlFor="français">Français</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="türkçe" />
                <Label htmlFor="türkçe">Türkçe</Label>
              </div>
            </div>

            {/* <Button type="submit" onClick={handleAdd}  className="bg-[#116666]">
              Submit
            </Button> */}
            
          </form>
          <button type="submit" onClick={handleAdd}  className="text-lg border-2 border-black bg-[#116666] hover:border-[#EE1442]  rounded-lg p-2">
                    Submit
                  </button>
        </Card>
      </div>
    </div>
  );
};
export default AddUser;
