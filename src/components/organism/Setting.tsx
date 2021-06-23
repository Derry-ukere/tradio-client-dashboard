/* eslint-disable indent */
import React from 'react';

const Setting = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card sub-menu">
          <div className="card-body active">
            <ul className="d-flex show">
              <li className="nav-item active">
                <a href="./settings.html" className="nav-link active">
                  <i className="mdi mdi-account-settings-variant" />
                  <span>Edit Profile</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./settings-preferences.html" className="nav-link">
                  <i className="mdi mdi-settings" />
                  <span>Preferences</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./settings-security.html" className="nav-link">
                  <i className="mdi mdi-lock" />
                  <span>Security</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="./settings-account.html" className="nav-link">
                  <i className="mdi mdi-bank" />
                  <span>Linked Account</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">User Profile</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <div className="form-row">
                    <div className="form-group col-xl-12">
                      <label className="mr-sm-2">Your Name</label>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group col-xl-12">
                      <div className="media align-items-center mb-3">
                        <img className="mr-3 rounded-circle mr-0 mr-sm-3" src="images/profile/2.png" width={50} height={50} alt="" />
                        <div className="media-body">
                          <h5 className="mb-0">John Doe</h5>
                          <p className="mb-0">Max file size is 20mb
                          </p>
                        </div>
                      </div>
                      <div className="file-upload-wrapper" data-text="Change Photo">
                        <input name="file-upload-field" type="file" className="file-upload-field" />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-success waves-effect px-4">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">User Profile</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <div className="form-row">
                    <div className="form-group col-xl-12">
                      <label className="mr-sm-2">New Email</label>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group col-xl-12">
                      <label className="mr-sm-2">New Password</label>
                      <input type="password" className="form-control" placeholder="**********" />
                      <p className="mt-2 mb-0">Enable two factor authencation on the security
                        page
                      </p>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-success waves-effect px-4">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Personal Information</h4>
              </div>
              <div className="card-body">
                <form method="post" name="myform" className="personal_validate" noValidate={true}>
                  <div className="form-row">
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Your Name</label>
                      <input type="text" className="form-control" placeholder="Saiful Islam" name="fullname" />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Email</label>
                      <input type="email" className="form-control" placeholder="Hello@example.com" name="email" />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Date of birth</label>
                      <input type="text" className="form-control hasDatepicker" placeholder="10-10-2020" id="datepicker" autoComplete="off" name="dob" />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Present Address</label>
                      <input type="text" className="form-control" placeholder="56, Old Street, Brooklyn" name="presentaddress" />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Permanent Address</label>
                      <input type="text" className="form-control" placeholder="123, Central Square, Brooklyn" name="permanentaddress" />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">City</label>
                      <input type="text" className="form-control" placeholder="New York" name="city" />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Postal Code</label>
                      <input type="text" className="form-control" placeholder="25481" name="postal" />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Country</label>
                      <select className="form-control" name="country" style={{ display: 'none' }}>
                        <option >Select</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">British Indian
                          Ocean Territory</option>
                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African
                          Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">Congo, The
                          Democratic Republic of The</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">Falkland Islands
                          (Malvinas)</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Territories">French Southern
                          Territories</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">Heard Island
                          and Mcdonald Islands</option>
                        <option value="Holy See (Vatican City State)">Holy See (Vatican
                          City State)</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic
                          of</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">Korea,
                          Democratic People's Republic of</option>
                        <option value="Korea, Republic of">Korea, Republic of</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">Lao People's
                          Democratic Republic</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">Micronesia,
                          Federated States of</option>
                        <option value="Moldova, Republic of">Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">Northern Mariana
                          Islands</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">Palestinian
                          Territory, Occupied</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">Russian Federation</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">Saint Pierre and
                          Miquelon</option>
                        <option value="Saint Vincent and The Grenadines">Saint Vincent
                          and The Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">
                          South Georgia and The South Sandwich Islands</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">Syrian Arab Republic
                        </option>
                        <option value="Taiwan, Province of China">Taiwan, Province of
                          China</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">Tanzania, United
                          Republic of</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">Turks and Caicos
                          Islands</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">United
                          States Minor Outlying Islands</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabweoption&gt;
                        </option></select><div className="nice-select form-control" tabIndex={0}><span className="current">Select</span><ul className="list"><li data-value className="option selected">Select</li><li data-value="Afghanistan" className="option">Afghanistan</li><li data-value="Åland Islands" className="option">Åland Islands</li><li data-value="Albania" className="option">Albania</li><li data-value="Algeria" className="option">Algeria</li><li data-value="American Samoa" className="option">American Samoa</li><li data-value="Andorra" className="option">Andorra</li><li data-value="Angola" className="option">Angola</li><li data-value="Anguilla" className="option">Anguilla</li><li data-value="Antarctica" className="option">Antarctica</li><li data-value="Antigua and Barbuda" className="option">Antigua and Barbuda</li><li data-value="Argentina" className="option">Argentina</li><li data-value="Armenia" className="option">Armenia</li><li data-value="Aruba" className="option">Aruba</li><li data-value="Australia" className="option">Australia</li><li data-value="Austria" className="option">Austria</li><li data-value="Azerbaijan" className="option">Azerbaijan</li><li data-value="Bahamas" className="option">Bahamas</li><li data-value="Bahrain" className="option">Bahrain</li><li data-value="Bangladesh" className="option">Bangladesh</li><li data-value="Barbados" className="option">Barbados</li><li data-value="Belarus" className="option">Belarus</li><li data-value="Belgium" className="option">Belgium</li><li data-value="Belize" className="option">Belize</li><li data-value="Benin" className="option">Benin</li><li data-value="Bermuda" className="option">Bermuda</li><li data-value="Bhutan" className="option">Bhutan</li><li data-value="Bolivia" className="option">Bolivia</li><li data-value="Bosnia and Herzegovina" className="option">Bosnia and Herzegovina
                        </li><li data-value="Botswana" className="option">Botswana</li><li data-value="Bouvet Island" className="option">Bouvet Island</li><li data-value="Brazil" className="option">Brazil</li><li data-value="British Indian Ocean Territory" className="option">British Indian
                          Ocean Territory</li><li data-value="Brunei Darussalam" className="option">Brunei Darussalam</li><li data-value="Bulgaria" className="option">Bulgaria</li><li data-value="Burkina Faso" className="option">Burkina Faso</li><li data-value="Burundi" className="option">Burundi</li><li data-value="Cambodia" className="option">Cambodia</li><li data-value="Cameroon" className="option">Cameroon</li><li data-value="Canada" className="option">Canada</li><li data-value="Cape Verde" className="option">Cape Verde</li><li data-value="Cayman Islands" className="option">Cayman Islands</li><li data-value="Central African Republic" className="option">Central African
                            Republic</li><li data-value="Chad" className="option">Chad</li><li data-value="Chile" className="option">Chile</li><li data-value="China" className="option">China</li><li data-value="Christmas Island" className="option">Christmas Island</li><li data-value="Cocos (Keeling) Islands" className="option">Cocos (Keeling) Islands
                          </li><li data-value="Colombia" className="option">Colombia</li><li data-value="Comoros" className="option">Comoros</li><li data-value="Congo" className="option">Congo</li><li data-value="Congo, The Democratic Republic of The" className="option">Congo, The
                            Democratic Republic of The</li><li data-value="Cook Islands" className="option">Cook Islands</li><li data-value="Costa Rica" className="option">Costa Rica</li><li data-value="Cote D'ivoire" className="option">Cote D'ivoire</li><li data-value="Croatia" className="option">Croatia</li><li data-value="Cuba" className="option">Cuba</li><li data-value="Cyprus" className="option">Cyprus</li><li data-value="Czech Republic" className="option">Czech Republic</li><li data-value="Denmark" className="option">Denmark</li><li data-value="Djibouti" className="option">Djibouti</li><li data-value="Dominica" className="option">Dominica</li><li data-value="Dominican Republic" className="option">Dominican Republic</li><li data-value="Ecuador" className="option">Ecuador</li><li data-value="Egypt" className="option">Egypt</li><li data-value="El Salvador" className="option">El Salvador</li><li data-value="Equatorial Guinea" className="option">Equatorial Guinea</li><li data-value="Eritrea" className="option">Eritrea</li><li data-value="Estonia" className="option">Estonia</li><li data-value="Ethiopia" className="option">Ethiopia</li><li data-value="Falkland Islands (Malvinas)" className="option">Falkland Islands
                              (Malvinas)</li><li data-value="Faroe Islands" className="option">Faroe Islands</li><li data-value="Fiji" className="option">Fiji</li><li data-value="Finland" className="option">Finland</li><li data-value="France" className="option">France</li><li data-value="French Guiana" className="option">French Guiana</li><li data-value="French Polynesia" className="option">French Polynesia</li><li data-value="French Southern Territories" className="option">French Southern
                                Territories</li><li data-value="Gabon" className="option">Gabon</li><li data-value="Gambia" className="option">Gambia</li><li data-value="Georgia" className="option">Georgia</li><li data-value="Germany" className="option">Germany</li><li data-value="Ghana" className="option">Ghana</li><li data-value="Gibraltar" className="option">Gibraltar</li><li data-value="Greece" className="option">Greece</li><li data-value="Greenland" className="option">Greenland</li><li data-value="Grenada" className="option">Grenada</li><li data-value="Guadeloupe" className="option">Guadeloupe</li><li data-value="Guam" className="option">Guam</li><li data-value="Guatemala" className="option">Guatemala</li><li data-value="Guernsey" className="option">Guernsey</li><li data-value="Guinea" className="option">Guinea</li><li data-value="Guinea-bissau" className="option">Guinea-bissau</li><li data-value="Guyana" className="option">Guyana</li><li data-value="Haiti" className="option">Haiti</li><li data-value="Heard Island and Mcdonald Islands" className="option">Heard Island
                                  and Mcdonald Islands</li><li data-value="Holy See (Vatican City State)" className="option">Holy See (Vatican
                                    City State)</li><li data-value="Honduras" className="option">Honduras</li><li data-value="Hong Kong" className="option">Hong Kong</li><li data-value="Hungary" className="option">Hungary</li><li data-value="Iceland" className="option">Iceland</li><li data-value="India" className="option">India</li><li data-value="Indonesia" className="option">Indonesia</li><li data-value="Iran, Islamic Republic of" className="option">Iran, Islamic Republic
                                      of</li><li data-value="Iraq" className="option">Iraq</li><li data-value="Ireland" className="option">Ireland</li><li data-value="Isle of Man" className="option">Isle of Man</li><li data-value="Israel" className="option">Israel</li><li data-value="Italy" className="option">Italy</li><li data-value="Jamaica" className="option">Jamaica</li><li data-value="Japan" className="option">Japan</li><li data-value="Jersey" className="option">Jersey</li><li data-value="Jordan" className="option">Jordan</li><li data-value="Kazakhstan" className="option">Kazakhstan</li><li data-value="Kenya" className="option">Kenya</li><li data-value="Kiribati" className="option">Kiribati</li><li data-value="Korea, Democratic People's Republic of" className="option">Korea,
                                        Democratic People's Republic of</li><li data-value="Korea, Republic of" className="option">Korea, Republic of</li><li data-value="Kuwait" className="option">Kuwait</li><li data-value="Kyrgyzstan" className="option">Kyrgyzstan</li><li data-value="Lao People's Democratic Republic" className="option">Lao People's
                                          Democratic Republic</li><li data-value="Latvia" className="option">Latvia</li><li data-value="Lebanon" className="option">Lebanon</li><li data-value="Lesotho" className="option">Lesotho</li><li data-value="Liberia" className="option">Liberia</li><li data-value="Libyan Arab Jamahiriya" className="option">Libyan Arab Jamahiriya
                          </li><li data-value="Liechtenstein" className="option">Liechtenstein</li><li data-value="Lithuania" className="option">Lithuania</li><li data-value="Luxembourg" className="option">Luxembourg</li><li data-value="Macao" className="option">Macao</li><li data-value="Macedonia, The Former Yugoslav Republic of" className="option">
                            Macedonia, The Former Yugoslav Republic of</li><li data-value="Madagascar" className="option">Madagascar</li><li data-value="Malawi" className="option">Malawi</li><li data-value="Malaysia" className="option">Malaysia</li><li data-value="Maldives" className="option">Maldives</li><li data-value="Mali" className="option">Mali</li><li data-value="Malta" className="option">Malta</li><li data-value="Marshall Islands" className="option">Marshall Islands</li><li data-value="Martinique" className="option">Martinique</li><li data-value="Mauritania" className="option">Mauritania</li><li data-value="Mauritius" className="option">Mauritius</li><li data-value="Mayotte" className="option">Mayotte</li><li data-value="Mexico" className="option">Mexico</li><li data-value="Micronesia, Federated States of" className="option">Micronesia,
                              Federated States of</li><li data-value="Moldova, Republic of" className="option">Moldova, Republic of
                          </li><li data-value="Monaco" className="option">Monaco</li><li data-value="Mongolia" className="option">Mongolia</li><li data-value="Montenegro" className="option">Montenegro</li><li data-value="Montserrat" className="option">Montserrat</li><li data-value="Morocco" className="option">Morocco</li><li data-value="Mozambique" className="option">Mozambique</li><li data-value="Myanmar" className="option">Myanmar</li><li data-value="Namibia" className="option">Namibia</li><li data-value="Nauru" className="option">Nauru</li><li data-value="Nepal" className="option">Nepal</li><li data-value="Netherlands" className="option">Netherlands</li><li data-value="Netherlands Antilles" className="option">Netherlands Antilles
                          </li><li data-value="New Caledonia" className="option">New Caledonia</li><li data-value="New Zealand" className="option">New Zealand</li><li data-value="Nicaragua" className="option">Nicaragua</li><li data-value="Niger" className="option">Niger</li><li data-value="Nigeria" className="option">Nigeria</li><li data-value="Niue" className="option">Niue</li><li data-value="Norfolk Island" className="option">Norfolk Island</li><li data-value="Northern Mariana Islands" className="option">Northern Mariana
                            Islands</li><li data-value="Norway" className="option">Norway</li><li data-value="Oman" className="option">Oman</li><li data-value="Pakistan" className="option">Pakistan</li><li data-value="Palau" className="option">Palau</li><li data-value="Palestinian Territory, Occupied" className="option">Palestinian
                              Territory, Occupied</li><li data-value="Panama" className="option">Panama</li><li data-value="Papua New Guinea" className="option">Papua New Guinea</li><li data-value="Paraguay" className="option">Paraguay</li><li data-value="Peru" className="option">Peru</li><li data-value="Philippines" className="option">Philippines</li><li data-value="Pitcairn" className="option">Pitcairn</li><li data-value="Poland" className="option">Poland</li><li data-value="Portugal" className="option">Portugal</li><li data-value="Puerto Rico" className="option">Puerto Rico</li><li data-value="Qatar" className="option">Qatar</li><li data-value="Reunion" className="option">Reunion</li><li data-value="Romania" className="option">Romania</li><li data-value="Russian Federation" className="option">Russian Federation</li><li data-value="Rwanda" className="option">Rwanda</li><li data-value="Saint Helena" className="option">Saint Helena</li><li data-value="Saint Kitts and Nevis" className="option">Saint Kitts and Nevis
                          </li><li data-value="Saint Lucia" className="option">Saint Lucia</li><li data-value="Saint Pierre and Miquelon" className="option">Saint Pierre and
                            Miquelon</li><li data-value="Saint Vincent and The Grenadines" className="option">Saint Vincent
                              and The Grenadines</li><li data-value="Samoa" className="option">Samoa</li><li data-value="San Marino" className="option">San Marino</li><li data-value="Sao Tome and Principe" className="option">Sao Tome and Principe
                          </li><li data-value="Saudi Arabia" className="option">Saudi Arabia</li><li data-value="Senegal" className="option">Senegal</li><li data-value="Serbia" className="option">Serbia</li><li data-value="Seychelles" className="option">Seychelles</li><li data-value="Sierra Leone" className="option">Sierra Leone</li><li data-value="Singapore" className="option">Singapore</li><li data-value="Slovakia" className="option">Slovakia</li><li data-value="Slovenia" className="option">Slovenia</li><li data-value="Solomon Islands" className="option">Solomon Islands</li><li data-value="Somalia" className="option">Somalia</li><li data-value="South Africa" className="option">South Africa</li><li data-value="South Georgia and The South Sandwich Islands" className="option">
                            South Georgia and The South Sandwich Islands</li><li data-value="Spain" className="option">Spain</li><li data-value="Sri Lanka" className="option">Sri Lanka</li><li data-value="Sudan" className="option">Sudan</li><li data-value="Suriname" className="option">Suriname</li><li data-value="Svalbard and Jan Mayen" className="option">Svalbard and Jan Mayen
                          </li><li data-value="Swaziland" className="option">Swaziland</li><li data-value="Sweden" className="option">Sweden</li><li data-value="Switzerland" className="option">Switzerland</li><li data-value="Syrian Arab Republic" className="option">Syrian Arab Republic
                          </li><li data-value="Taiwan, Province of China" className="option">Taiwan, Province of
                            China</li><li data-value="Tajikistan" className="option">Tajikistan</li><li data-value="Tanzania, United Republic of" className="option">Tanzania, United
                              Republic of</li><li data-value="Thailand" className="option">Thailand</li><li data-value="Timor-leste" className="option">Timor-leste</li><li data-value="Togo" className="option">Togo</li><li data-value="Tokelau" className="option">Tokelau</li><li data-value="Tonga" className="option">Tonga</li><li data-value="Trinidad and Tobago" className="option">Trinidad and Tobago</li><li data-value="Tunisia" className="option">Tunisia</li><li data-value="Turkey" className="option">Turkey</li><li data-value="Turkmenistan" className="option">Turkmenistan</li><li data-value="Turks and Caicos Islands" className="option">Turks and Caicos
                                Islands</li><li data-value="Tuvalu" className="option">Tuvalu</li><li data-value="Uganda" className="option">Uganda</li><li data-value="Ukraine" className="option">Ukraine</li><li data-value="United Arab Emirates" className="option">United Arab Emirates
                          </li><li data-value="United Kingdom" className="option">United Kingdom</li><li data-value="United States" className="option">United States</li><li data-value="United States Minor Outlying Islands" className="option">United
                            States Minor Outlying Islands</li><li data-value="Uruguay" className="option">Uruguay</li><li data-value="Uzbekistan" className="option">Uzbekistan</li><li data-value="Vanuatu" className="option">Vanuatu</li><li data-value="Venezuela" className="option">Venezuela</li><li data-value="Viet Nam" className="option">Viet Nam</li><li data-value="Virgin Islands, British" className="option">Virgin Islands, British
                          </li><li data-value="Virgin Islands, U.S." className="option">Virgin Islands, U.S.
                          </li><li data-value="Wallis and Futuna" className="option">Wallis and Futuna</li><li data-value="Western Sahara" className="option">Western Sahara</li><li data-value="Yemen" className="option">Yemen</li><li data-value="Zambia" className="option">Zambia</li><li data-value="Zimbabwe" className="option">Zimbabweoption&gt;
                          </li></ul></div>
                    </div>
                    <div className="form-group col-12">
                      <button className="btn btn-success px-4">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Setting;
