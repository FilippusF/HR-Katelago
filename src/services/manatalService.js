const API_KEY = import.meta.env.VITE_MANATAL_API_KEY;
const BASE_URL = import.meta.env.VITE_MANATAL_BASE_URL || 'https://api.manatal.com/v3';

class ManatalService {
  async getJobs() {
    try {
      const response = await fetch(`${BASE_URL}/jobs/`, {
        headers: {
          'Authorization': `Token ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return { results: [] };
    }
  }

  async submitApplication(applicationData) {
    try {
      const formData = new FormData();
      
      formData.append('first_name', applicationData.firstName);
      formData.append('last_name', applicationData.lastName);
      formData.append('email', applicationData.email);
      formData.append('phone', applicationData.phone || '');
      formData.append('cover_letter', applicationData.message || '');
      
      if (applicationData.jobId) {
        formData.append('job', applicationData.jobId);
      }
      
      if (applicationData.resume) {
        formData.append('resume', applicationData.resume);
      }

      const response = await fetch(`${BASE_URL}/candidates/`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${API_KEY}`,
        },
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit application');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  }
}

export default new ManatalService();