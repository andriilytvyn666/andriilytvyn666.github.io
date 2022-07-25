using Microsoft.OpenApi.Models;

namespace PersonalWebsiteBackend;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1",
                    new OpenApiInfo
                    {
                        Title = "Personal Website API",
                        Version = "v1",
                        Description = "Simple API for personal website",
                        License = new OpenApiLicense() { Name = "MIT" },
                    }
                    );
        });

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseReDoc(c =>
            {
                c.RoutePrefix = "docs";
            });
        }

        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();

        app.Run();
    }
}
