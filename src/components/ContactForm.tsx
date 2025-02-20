import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState({
    firstName: false,
    email: false,
    message: false,
  });
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    enquiryType: "general",
    message: "",
  });

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      email: "",
      enquiryType: "general",
      message: "",
    });
    setTouched({
      firstName: false,
      email: false,
      message: false,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call with 50% success rate
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5 ? resolve(true) : reject(new Error("Random failure"));
        }, 1500);
      });

      // Success case
      toast({
        title: "All good!",
        description: `Thanks for your submission ${formData.firstName}, we will get back to you shortly!`,
        variant: "default",
      });

      resetForm();
    } catch (error) {
      // Failure case
      toast({
        title: "Oops",
        description: "Something went wrong, please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#8B5CF6]/20">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-4xl font-bold text-center mb-12">Contact me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              autoFocus
              className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                touched.firstName && formData.firstName === "" ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              onBlur={() => setTouched({ ...touched, firstName: true })}
            />
            {touched.firstName && formData.firstName === "" && (
              <p className="mt-1 text-sm text-red-500">Required</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                touched.email && (formData.email === "" || !isValidEmail(formData.email)) ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onBlur={() => setTouched({ ...touched, email: true })}
            />
            {touched.email && formData.email === "" && (
              <p className="mt-1 text-sm text-red-500">Required</p>
            )}
            {touched.email && formData.email !== "" && !isValidEmail(formData.email) && (
              <p className="mt-1 text-sm text-red-500">Invalid email address</p>
            )}
          </div>
          <div>
            <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-1">
              Type of enquiry
            </label>
            <select
              id="enquiryType"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
            >
              <option value="general">General Enquiry</option>
              <option value="project">Project Proposal</option>
              <option value="job">Job Opportunity</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your message
            </label>
            <textarea
              id="message"
              required
              minLength={25}
              rows={4}
              className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                touched.message && formData.message === "" ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onBlur={() => setTouched({ ...touched, message: true })}
            />
            {touched.message && formData.message === "" && (
              <p className="mt-1 text-sm text-red-500">Required</p>
            )}
            {formData.message.length > 0 && formData.message.length < 25 && (
              <p className="mt-1 text-sm text-red-500">
                Message must be at least 25 characters long (currently {formData.message.length} characters)
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;