using FluentEmail.Core;
using System.Threading.Tasks;
using System.IO;
using System.Reflection;

namespace Infrastructure.Emails
{
    public class EmailService
    {
        private readonly IFluentEmail _fluentEmail;

        public EmailService(IFluentEmail fluentEmail)
        {
            _fluentEmail = fluentEmail;
        }

        public Task SendEmailWithTemplate()
        {
            return _fluentEmail
                .To("")
                .Subject($"{""} just joined Skipper Agency")
                .UsingTemplateFromFile($"{Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)}/EmailTemplates/NewSkipperNotice/NewSkipperNoticeTemplate.cshtml", "")
                .SendAsync();
        }

    }
}
