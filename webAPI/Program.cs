var myAllowAllOrigins = "_myAllowAllOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowAllOrigins,
                      policy =>
                      {
                          policy.AllowAnyOrigin().AllowAnyHeader();

                      });
});


var app = builder.Build();
app.UseFileServer();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(myAllowAllOrigins);

}

app.UseHttpsRedirection();


app.UseAuthorization();

app.MapControllers();

app.Run();
