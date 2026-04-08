'use client';

import { useState } from 'react';
import Card from '@/components/Card';

export default function Apply() {
  const [formData, setFormData] = useState({
    // General Information
    name: '',
    address: '',
    telephone: '',
    email: '',
    
    // HM Forces / Veterans
    hmService: '',
    branch: '',
    serviceNumber: '',
    
    // Emergency Services
    emergencyService: '',
    position: '',
    staffNumber: '',
    
    // Contact Preference
    contactTel: false,
    contactEmail: false,
    contactFacebook: false,
    
    // Other Applications
    reason: '',
    
    // Membership Options
    fullMembership: '',
    payAsYouGo: '',
    
    // Photo Consent
    photoConsent: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Application submitted! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Membership Application</h1>
          <p className="text-xl text-white/90">
            Join the Joint Services Social Club
          </p>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* General Information */}
            <Card>
              <h2 className="text-2xl font-bold text-charcoal mb-6">General Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-gray-700 font-semibold mb-2">
                    Telephone Number *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </Card>

            {/* HM Forces / Veterans and Emergency Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h2 className="text-2xl font-bold text-charcoal mb-6">HM Forces / Veterans</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="hmService" className="block text-gray-700 font-semibold mb-2">
                      Service (e.g., Army, Navy, RAF)
                    </label>
                    <input
                      type="text"
                      id="hmService"
                      name="hmService"
                      value={formData.hmService}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="branch" className="block text-gray-700 font-semibold mb-2">
                      Branch / Trade
                    </label>
                    <input
                      type="text"
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceNumber" className="block text-gray-700 font-semibold mb-2">
                      Service Number
                    </label>
                    <input
                      type="text"
                      id="serviceNumber"
                      name="serviceNumber"
                      value={formData.serviceNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-charcoal mb-6">Emergency Services</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="emergencyService" className="block text-gray-700 font-semibold mb-2">
                      Service (e.g., Police, Fire, Ambulance)
                    </label>
                    <input
                      type="text"
                      id="emergencyService"
                      name="emergencyService"
                      value={formData.emergencyService}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-gray-700 font-semibold mb-2">
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="staffNumber" className="block text-gray-700 font-semibold mb-2">
                      Staff Number
                    </label>
                    <input
                      type="text"
                      id="staffNumber"
                      name="staffNumber"
                      value={formData.staffNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Preference and Other Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h2 className="text-2xl font-bold text-charcoal mb-6">How would you like to be contacted?</h2>
                <p className="text-gray-600 text-sm mb-4">(more than one may be selected)</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contactTel"
                      name="contactTel"
                      checked={formData.contactTel}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="contactTel" className="ml-3 text-gray-700">
                      Tel No
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contactEmail"
                      name="contactEmail"
                      checked={formData.contactEmail}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="contactEmail" className="ml-3 text-gray-700">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contactFacebook"
                      name="contactFacebook"
                      checked={formData.contactFacebook}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="contactFacebook" className="ml-3 text-gray-700">
                      Facebook
                    </label>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-charcoal mb-6">Other Applications</h2>
                <div>
                  <label htmlFor="reason" className="block text-gray-700 font-semibold mb-2">
                    Reason for application
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={5}
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
              </Card>
            </div>

            {/* Membership Options */}
            <Card>
              <h2 className="text-2xl font-bold text-charcoal mb-6">Membership Options *</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Full Membership (£60): Y / N *
                  </label>
                  <div className="flex gap-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="fullMembershipYes"
                        name="fullMembership"
                        value="yes"
                        checked={formData.fullMembership === 'yes'}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                      />
                      <label htmlFor="fullMembershipYes" className="ml-2 text-gray-700">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="fullMembershipNo"
                        name="fullMembership"
                        value="no"
                        checked={formData.fullMembership === 'no'}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                      />
                      <label htmlFor="fullMembershipNo" className="ml-2 text-gray-700">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Pay As You Go: Y / N *
                  </label>
                  <div className="flex gap-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="payAsYouGoYes"
                        name="payAsYouGo"
                        value="yes"
                        checked={formData.payAsYouGo === 'yes'}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                      />
                      <label htmlFor="payAsYouGoYes" className="ml-2 text-gray-700">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="payAsYouGoNo"
                        name="payAsYouGo"
                        value="no"
                        checked={formData.payAsYouGo === 'no'}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                      />
                      <label htmlFor="payAsYouGoNo" className="ml-2 text-gray-700">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Photo Consent */}
            <Card>
              <h2 className="text-2xl font-bold text-charcoal mb-6">Photo Consent *</h2>
              <label className="block text-gray-700 font-semibold mb-3">
                You can take and display my picture on line and social media: Y / N *
              </label>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="photoConsentYes"
                    name="photoConsent"
                    value="yes"
                    checked={formData.photoConsent === 'yes'}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor="photoConsentYes" className="ml-2 text-gray-700">
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="photoConsentNo"
                    name="photoConsent"
                    value="no"
                    checked={formData.photoConsent === 'no'}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor="photoConsentNo" className="ml-2 text-gray-700">
                    No
                  </label>
                </div>
              </div>
            </Card>

            {/* Submit Button */}
            <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-gray-700 mb-4">
                * Please select the required answer
              </p>
              <p className="text-gray-700 mb-6">
                By submitting this form, you confirm that the information provided is accurate and you agree to 
                the club's terms and conditions.
              </p>
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
