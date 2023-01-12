import axios from "axios";
import React from "react";
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
const AddUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    medicalConditions: "",
    allergies: "",
    medications: "",
    bloodType: "",
    weight: "",
    height: "",
    languages: "",
  });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/users/findOne/" + id);
      if (response.data.success) setData(response.data.user);
    };
    getData();
  }, [id]);

  const handleAdd = async () => {
    const response = await axios.post("/users/adduser", data);
    console.log(response);
    if (response.data.success) navigate("/dashboard");
  };

  console.log(data);
  return (
    <div className="flex flex-col justify-center align-center w-[100vw]  border border-solid min-h-screen ">
      <div className="w-[375px] m-auto ">
        <Card>
          <form className="flex flex-col gap-4">
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
                <Select id="age" required={true}>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                  <option value="">24</option>
                  <option value="">25</option>
                  <option value="">26</option>
                  <option value="">27</option>
                  <option value="">28</option>
                  <option value="">29</option>
                  <option value="">30</option>
                  <option value="">31</option>
                  <option value="">32</option>
                  <option value="">33</option>
                  <option value="">34</option>
                  <option value="">35</option>
                  <option value="">36</option>
                  <option value="">37</option>
                  <option value="">38</option>
                  <option value="">39</option>
                  <option value="">40</option>
                  <option value="">41</option>
                  <option value="">42</option>
                  <option value="">43</option>
                  <option value="">44</option>
                  <option value="">45</option>
                  <option value="">46</option>
                  <option value="">47</option>
                  <option value="">48</option>
                  <option value="">49</option>
                  <option value="">50</option>
                  <option value="">51</option>
                  <option value="">52</option>
                  <option value="">53</option>
                  <option value="">54</option>
                  <option value="">55</option>
                  <option value="">56</option>
                  <option value="">57</option>
                  <option value="">58</option>
                  <option value="">59</option>
                  <option value="">60</option>
                  <option value="">61</option>
                  <option value="">62</option>
                  <option value="">63</option>
                  <option value="">64</option>
                  <option value="">65</option>
                  <option value="">66</option>
                  <option value="">67</option>
                  <option value="">68</option>
                  <option value="">69</option>
                  <option value="">70</option>
                  <option value="">71</option>
                  <option value="">72</option>
                  <option value="">73</option>
                  <option value="">74</option>
                  <option value="">75</option>
                  <option value="">76</option>
                  <option value="">77</option>
                  <option value="">78</option>
                  <option value="">79</option>
                  <option value="">80</option>
                  <option value="">81</option>
                  <option value="">82</option>
                  <option value="">83</option>
                  <option value="">84</option>
                  <option value="">85</option>
                  <option value="">86</option>
                  <option value="">87</option>
                  <option value="">88</option>
                  <option value="">89</option>
                  <option value="">90</option>
                  <option value="">91</option>
                  <option value="">92</option>
                  <option value="">93</option>
                  <option value="">94</option>
                  <option value="">95</option>
                  <option value="">96</option>
                  <option value="">97</option>
                  <option value="">98</option>
                  <option value="">99</option>
                  <option value="">100</option>
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
              />
            </div>

            {/* Blood Type */}
            <Dropdown
              label="Blood Type:"
              placement="right"
              dismissOnClick={false}
            >
              <fieldset className="flex flex-col gap-4" id="radio">
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
              />
            </div>

            {/* Languages */}
            <div className="flex flex-col gap-4" id="checkbox">
              <Label>Languages:</Label>
              <div className="flex items-center gap-2">
                <Checkbox id="english" />
                <Label htmlFor="english">English</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="deutsch" />
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

            <Button type="submit" onClick={handleAdd}>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
export default AddUser;
