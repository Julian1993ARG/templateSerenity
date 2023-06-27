using Serenity;

namespace Puntonet
{
    public class GridPageModel
    {
        public string Module { get; set; }
        public LocalText PageTitle { get; set; }
        public bool ESModules { get; set; } = true;
    }
}