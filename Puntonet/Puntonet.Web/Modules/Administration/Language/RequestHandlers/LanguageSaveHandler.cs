using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Puntonet.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Puntonet.Administration.LanguageRow;


namespace Puntonet.Administration
{
    public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
    {
        public LanguageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}