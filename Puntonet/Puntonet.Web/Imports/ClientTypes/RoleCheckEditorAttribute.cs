using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Puntonet
{
    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "/Modules/Administration/UserRole/RoleCheckEditor:RoleCheckEditor";

        public RoleCheckEditorAttribute()
            : base(Key)
        {
        }
    }
}
