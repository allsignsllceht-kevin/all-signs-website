import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import mapPlaceholder from "@/assets/gallery-1.png";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Construct the email body with formatted content
    const emailBody = `
New Quote Request from AllSignsLLC.com

------- CONTACT INFORMATION -------
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Business Name: ${formData.businessName}
Email: ${formData.email}
Phone: ${formData.phone}

------- PROJECT DETAILS -------
${formData.message}

------- END OF MESSAGE -------

This email was sent via the contact form on allsignsllc.com
    `.trim();

    // Construct the mailto link
    const subject = encodeURIComponent("New Quote Request from AllSignsLLC.com");
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:allsignsllc@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Show success message
    setSubmitted(true);

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        businessName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground text-lg">
            Call us directly or fill out the form below to request a free quote. We're ready to help your business get noticed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h4 className="text-2xl font-display font-bold text-primary mb-8">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Call Us</p>
                    <a href="tel:6098390122" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
                      (609) 839-0122
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                    <p className="text-lg font-medium text-foreground">
                      28 Cambria Ave<br />
                      Pleasantville, NJ 08232
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:allsignsllc@gmail.com" className="text-lg font-medium text-foreground hover:text-secondary transition-colors">
                      allsignsllc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-lg font-medium text-foreground">
                      Mon-Fri: 8:00 AM - 5:00 PM<br />
                      Sat-Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-border h-64 relative overflow-hidden">
              <img 
                src={mapPlaceholder} 
                alt="Map to All Signs LLC" 
                className="w-full h-full object-cover rounded-xl filter grayscale opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full font-bold text-primary shadow-lg flex items-center gap-2 border border-border">
                  <MapPin className="w-5 h-5 text-secondary" /> View on Google Maps
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-border h-full">
              <h4 className="text-2xl font-display font-bold text-primary mb-2">Request a Quote</h4>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <div className="text-green-600 text-2xl">✓</div>
                  <div>
                    <p className="font-bold text-green-900">Email client opening...</p>
                    <p className="text-sm text-green-700">Your email client should open with your message. If it doesn't, please email us directly at <a href="mailto:allsignsllc@gmail.com" className="underline font-bold">allsignsllc@gmail.com</a></p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">First Name *</label>
                    <input 
                      required
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-border rounded-md p-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Last Name</label>
                    <input 
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-border rounded-md p-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Business Name</label>
                  <input 
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-muted/50 border border-border rounded-md p-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your Company LLC"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email Address *</label>
                    <input 
                      required
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-border rounded-md p-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Phone Number *</label>
                    <input 
                      required
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-border rounded-md p-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Project Details *</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-muted/50 border border-border rounded-md p-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all min-h-[150px] resize-y"
                    placeholder="Tell us about the sign you need (type, size, location, etc.)..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, your email client will open with your message pre-filled. Simply review and send from your email account.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
